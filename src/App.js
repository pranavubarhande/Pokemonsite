import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import SearchResultsPage from './pages/searchresults';
import DetailsPage from './pages/details';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
