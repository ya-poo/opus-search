import {ComposerTable} from "../component/ComposerTable";
import {VFC} from "react";
import {useListComposers} from "../hooks/useListComposers";
import {Button} from "@mui/material";

export const ComposersPage: VFC = () => {
  const {composers, isLoading, fetchPopularComposers} = useListComposers();

  return (
    <>
      <h1>Search Composers</h1>
      <Button variant="contained" onClick={fetchPopularComposers}>Search</Button>
      <ComposerTable composers={composers} isLoading={isLoading}/>
    </>
  )
}
