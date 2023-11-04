import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import EstimatePage from './EstimatePage';
import Estimate from './Estimate';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/estimate" element={<Estimate />} />
    </Routes>
  );
}

export default Main;
