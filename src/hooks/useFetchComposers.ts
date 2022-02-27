import { useEffect, useState } from 'react';
import { Composer } from '../api/common';
import { Period, Periods } from '../domain/Period';
import { ComposerResponse } from '../api/ComposerResponse';
import apiClient from '../api/lib/apiClient';

const useFetchComposers = () => {
  const [allComposers, setAllComposers] = useState<Array<Composer>>([]);
  const [popularComposers, setPopularComposers] = useState<Array<Composer>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchComposersByPeriod = async (period: Period): Promise<Array<Composer>> => apiClient
    .get<ComposerResponse>(`/composer/list/epoch/${period}.json`)
    .then((response) => response.data.composers);

  const fetchPopularComposers = async (): Promise<Array<Composer>> => apiClient
    .get<ComposerResponse>('/composer/list/pop.json')
    .then((response) => response.data.composers);

  useEffect(() => {
    setIsLoading(true);

    setAllComposers([]);
    Promise.all(
      Periods.map(async (period) => fetchComposersByPeriod(period)),
    ).then((periodComposers) => {
      periodComposers.forEach((composers) => {
        setAllComposers((prevComposers) => prevComposers.concat(composers));
      });
    });

    fetchPopularComposers()
      .then((composers) => {
        setPopularComposers(composers);
      });
    setIsLoading(false);
  }, []);

  return {
    allComposers,
    popularComposers,
    isLoading,
  };
};

export default useFetchComposers;
