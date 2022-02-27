import React, {VFC} from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {ComposersPage} from "./page/Composers";
import {Container} from "@mui/material";

const App: VFC = () => {
  return (
    <div className="App">
      <Container maxWidth='xl'>
        <Routes>
          <Route path="/" element={<ComposersPage/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
