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
    <div>
    <div className="App">
              
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/overview/*" element={<ButtonsPage />} />
      </Routes>
      
    </div>
    <Footer/>
    </div>
  );
};

export default App;
