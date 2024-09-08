import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PublishedPage from './Pages/PublishedPage';
import BuilderPage from './Pages/BuilderPage';

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<BuilderPage />} />
        <Route path="/published" element={<PublishedPage />} />
      </Routes>
    
  );
};

export default App;
