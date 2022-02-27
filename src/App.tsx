import React, {VFC} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {ComposersPage} from "./page/Composers";
import {Container} from "@mui/material";
import {ComposerWorks} from "./page/ComposerWorks";

const App: VFC = () => {
  return (
    <div className='App'>
      <Container maxWidth='xl'>
        <Routes>
          <Route path='/' element={<ComposersPage/>}/>
          <Route path='/composers/:composerCode' element={<ComposerWorks/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
