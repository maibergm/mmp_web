import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Estimate from './Estimate';
import PrivacyPolicy from './PrivacyPolicy'

function Main() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/estimate" element={<Estimate />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default Main;
