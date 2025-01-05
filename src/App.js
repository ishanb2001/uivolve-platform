import React from 'react';
import './App.css';
import './Custom.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ButtonsPage from './ButtonsPage';
import TabSlidePage from './TabSlidePage';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/tab-slider" element={<TabSlidePage />} />
        </Routes>
      <div className="App">
      <Routes>
          
          <Route path="/overview/*" element={<ButtonsPage />} />
          
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
