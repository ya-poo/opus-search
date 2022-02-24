import React from 'react';
import './App.css';
import {useListComposers} from "./hooks/useListComposers";
import {Button, Container} from "@mui/material";
import {ComposerList} from "./component/ComposerList";

const App = () => {
  const {composers, isLoading, fetchPopularComposers} = useListComposers();

  return (
    <div className="App">
      <Container>
        <h1>Popular Composers</h1>
        <Button variant="contained" onClick={fetchPopularComposers}>Search</Button>
        <ComposerList composers={composers} isLoading={isLoading}/>
      </Container>
    </div>
  );
}

export default App;
