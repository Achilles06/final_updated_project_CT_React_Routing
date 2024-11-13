import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseCharacters />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
