import React from 'react';
import './App.css';
import './Custom.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import ButtonsPage from './ButtonsPage';
import Home from './Home';
import Footer from './Footer';
import Logo from './images/uivolve-logo.png';

const App = () => {
  return (
    <div style={{ marginTop: 180, marginBottom: 30 }} className="App">
      <Navbar />
      <div style={{display: 'flex'}}>
        <div>
      <h1 style={{ marginBottom: 30 }} className="font-giant shiny-text">Frontend Boost with Snippets and Docs</h1>
      <p style={{ marginBottom: 30 }}>Join the millions of companies of all sizes that use Stripe to accept payments online and in person, embed financial services.</p>
      </div>

      <div>
      
      </div>
      </div>
      <div style={{ marginBottom: 90 }}>
      <button className="button button-medium bg-black">
                Documentation
              </button>
              
              </div>
              <div className="flex">
        <div className="purple-bg test shadow-black card is-flex-grow-4 flex is-flex-direction-column is-justify-content-space-between">
          <div className="card-content">
            <div className="label white-bg black-text label-rounded">MEMBERSHIP</div>
          </div>
          <div className="card-content">
            <h1 className="white-text">EvoCSS</h1>
            <p className="white-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="green-bg test shadow-black card is-flex-grow-4 flex is-flex-direction-column is-justify-content-space-between">
          <div className="card-content">
            <div className="label white-bg black-text label-rounded">MEMBERSHIP</div>
          </div>
          <div className="card-content">
            <h1 className="white-text">EvoMail</h1>
            <p className="white-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="flex is-flex-direction-column is-justify-content-space-between">
          <div className="white-bg test shadow-black card is-flex-grow-1 flex is-flex-direction-column is-justify-content-space-between">
            <div className="card-content">
              <div className="label green-bg white-text label-rounded">MEMBERSHIP</div>
            </div>
            <div className="card-content">
              <h1 className="black-text ">Video Lessons</h1>
            </div>
          </div>
          <div className="white-bg test shadow-black card flex is-flex-direction-column is-justify-content-space-between">
            <div className="card-content">
              <div className="label purple-bg white-text label-rounded">MEMBERSHIP</div>
            </div>
            <div className="card-content">
              <h1 className="black-text">GitHub</h1>
            </div>
          </div>
        </div>
      </div>
              
      <Routes>
        
        <Route path="/overview/*" element={<ButtonsPage />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
