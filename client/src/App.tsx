import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Extras from './components/Extras';
// import { PopupProvider } from './context/PopupContext';
import './App.css';

function App() {
  return (
    // <PopupProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/extras-about-me" element={<Extras />} />
        </Routes>
      </Router>
    // </PopupProvider>
    
  );
}

export default App;
