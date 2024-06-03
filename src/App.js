import React from 'react';
import './App.css';
import './Custom.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import ButtonsPage from './ButtonsPage';
import Home from './Home';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App grid-background">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/overview/*" element={<ButtonsPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
