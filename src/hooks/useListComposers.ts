import {useState} from "react";
import {Composer, ComposerResponse} from "../api/ComposerResponse";
import {apiClient} from "../api/lib/apiClient";

export const useListComposers = () => {
  const [composers, setComposers] = useState<Array<Composer>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPopularComposers = async () => {
    setIsLoading(true);

    await apiClient
      .get<ComposerResponse>("/composer/list/pop.json")
      .then((response) => {
        setComposers(response.data.composers.sort((c1, c2) => {
          if (c1.birth < c2.birth) {
            return -1;
          } else {
            return 1;
          }
        }));
      })

    setIsLoading(false);
  }

  return {
    composers,
    isLoading,
    fetchPopularComposers
  }
}
