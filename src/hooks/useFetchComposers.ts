import {useCallback, useState} from "react";
import {Composer} from "../api/common";
import {Period, Periods} from "../domain/Period";
import {apiClient} from "../api/lib/apiClient";
import {ComposerResponse} from "../api/ComposerResponse";

export const useFetchComposers = () => {
  const [allComposers, setAllComposers] = useState<Array<Composer>>([]);
  const [popularComposers, setPopularComposers] = useState<Array<Composer>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllComposers = useCallback(async () => {
    setIsLoading(true)

    setAllComposers([]);
    Promise.all(
      Periods.map(async (period) => fetchComposersByPeriod(period))
    ).then((periodComposers) => {
      periodComposers.forEach((composers) => {
        setAllComposers((prevComposers) => prevComposers.concat(composers))
      })
    });

    fetchPopularComposers()
      .then((composers) => {
        setPopularComposers(composers);
      })
    setIsLoading(false)
  }, [])

  const fetchComposersByPeriod = async (period: Period): Promise<Array<Composer>> => {
    return apiClient
      .get<ComposerResponse>(`/composer/list/epoch/${period}.json`)
      .then((response) => response.data.composers)
  }

  const fetchPopularComposers = async (): Promise<Array<Composer>> => {
    return apiClient
      .get<ComposerResponse>('/composer/list/pop.json')
      .then((response) => response.data.composers)
  }

  return {
    allComposers,
    popularComposers,
    fetchAllComposers,
    isLoading
  }
}
