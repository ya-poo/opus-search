import {useCallback, useEffect, useState, VFC} from "react";
import {useParams} from "react-router-dom";
import {apiClient} from "../api/lib/apiClient";
import {WorkResponse} from "../api/WorkResponse";
import {Composer, Work} from "../api/common";
import {ComposerWorkTable} from "../component/ComposerWorkTable";
import {CircularProgress} from "@mui/material";

export const ComposerWorks: VFC = () => {
  const {composerCode} = useParams();
  const [composer, setComposer] = useState<Composer>();
  const [works, setWorks] = useState<Array<Work>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchComposerWorks = useCallback(async () => {
    setIsLoading(true);
    await apiClient
      .get<WorkResponse>(`/work/list/composer/${composerCode}/genre/all.json`)
      .then((response) => {
        setComposer(response.data.composer);
        setWorks(response.data.works);
      })
    setIsLoading(false);
  }, [composerCode]);

  useEffect(() => {
    fetchComposerWorks()
      .catch(console.error)
  }, [fetchComposerWorks]);

  return composer && !isLoading ? <ComposerWorkTable composer={composer} works={works}/> : <CircularProgress/>
}
