import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Consumer from './components/Consumer';
import JobPosting from './components/JobPosting';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Consumer" element={<Consumer />} />
      <Route path="/JobPosting" element={<JobPosting />} />
    </Routes>
  </Router>
  );
}

export default App;

