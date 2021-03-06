import React, { VFC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import ComposerWorks from './page/ComposerWorks';
import NavigationBar from './component/NavigationBar';
import Composers from './page/Composers';

const App: VFC = () => (
  <div className="App">
    <NavigationBar />
    <Container maxWidth="xl">
      <Routes>
        <Route path="/composers" element={<Composers />} />
        <Route path="/composers/:composerCode" element={<ComposerWorks />} />
        <Route path="*" element={<Navigate to="composers" replace />} />
      </Routes>
    </Container>
  </div>
);

export default App;
