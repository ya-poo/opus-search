import React, {VFC} from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {ComposersPage} from "./page/Composers";
import {Container} from "@mui/material";
import {ComposerWorks} from "./page/ComposerWorks";
import {NavigationBar} from "./component/NavigationBar";

const App: VFC = () => {
  return (
    <div className='App'>
      <NavigationBar/>
      <Container maxWidth='xl'>
        <Routes>
          <Route path='/composers' element={<ComposersPage/>}/>
          <Route path='/composers/:composerCode' element={<ComposerWorks/>}/>
          <Route path='*' element={<Navigate to="composers" replace/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
