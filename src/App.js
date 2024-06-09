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
    <div className="App">
      <Navbar />
      <div style={{ marginTop: 110, marginBottom: 30 }} className="label black-bg white-text label-rounded">
            <strong>EXPLORE HERE</strong>
          </div>
      <h1 className="font-giant shiny-text">Frontend Boost with Snippets and Docs</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>
      <div className="flex">
      <button className="button button-medium light-purple">
                Documentation
              </button>
              <button className="button button-medium light-purple">
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
              <h1 className="black-text">Video Lessons</h1>
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
        <Route path="/home" element={<Home />} />
        <Route path="/overview/*" element={<ButtonsPage />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
