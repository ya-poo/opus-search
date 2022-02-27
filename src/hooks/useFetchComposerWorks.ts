import { useEffect, useState } from 'react';
import { Composer, Work } from '../api/common';
import apiClient from '../api/lib/apiClient';
import { WorkResponse } from '../api/WorkResponse';

const useFetchComposerWorks = (composerCode: string | undefined) => {
  const [composer, setComposer] = useState<Composer>();
  const [works, setWorks] = useState<Array<Work>>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<WorkResponse>(`/work/list/composer/${composerCode}/genre/all.json`)
      .then((response) => {
        setComposer(response.data.composer);
        setWorks(response.data.works);
      });
    setIsLoading(false);
  }, [composerCode]);

  return {
    composer,
    works,
    isLoading,
  };
};

export default useFetchComposerWorks;
