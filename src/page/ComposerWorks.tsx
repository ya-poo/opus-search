import {useEffect, VFC} from "react";
import {useParams} from "react-router-dom";
import {ComposerWorkTable} from "../component/ComposerWorkTable";
import {CircularProgress} from "@mui/material";
import {useFetchComposerWorks} from "../hooks/useFetchComposerWorks";

export const ComposerWorks: VFC = () => {
  const {composerCode} = useParams();
  const {composer, works, isLoading, fetchComposerWorks} = useFetchComposerWorks(composerCode);

  useEffect(() => {
    fetchComposerWorks()
      .catch(console.error)
  }, [fetchComposerWorks]);

  return composer && !isLoading ? <ComposerWorkTable composer={composer} works={works}/> : <CircularProgress/>
}
