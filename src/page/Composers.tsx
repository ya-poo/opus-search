import {ComposerTable} from "../component/ComposerTable";
import {useEffect, VFC} from "react";
import {CircularProgress} from "@mui/material";
import {useFetchComposers} from "../hooks/useFetchComposers";

export const ComposersPage: VFC = () => {
  const {allComposers, popularComposers, fetchAllComposers, isLoading} = useFetchComposers();

  useEffect(() => {
    fetchAllComposers()
      .catch(console.error)
  }, [fetchAllComposers]);

  return (
    <>
      {
        isLoading ?
          (<CircularProgress/>) :
          <ComposerTable
            composers={allComposers}
            popularComposerIds={popularComposers.map((composer) => composer.id)}
          />
      }
    </>
  )
}
