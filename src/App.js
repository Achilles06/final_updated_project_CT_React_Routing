import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <Router>
            <div className="app">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/browse-characters" element={<BrowseCharacters />} />
                    <Route path="/character-details/:id" element={<CharacterDetails />} />
                    <Route path="/comics" element={<Comics />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
