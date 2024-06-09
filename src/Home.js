import React from 'react';
import { Link } from 'react-router-dom';
import './Custom.css'; 
import './App.css'; 

const Home = () => {
  return (
    <div>
<div className="banner-content">
        <div style={{ marginTop: 140, marginBottom: 50 }} className="banner">
          <div style={{ marginBottom: 30 }} className="label black-bg white-text label-rounded">
            <strong>EXPLORE HERE</strong>
          </div>
          <h1 className="font-giant shiny-text">Frontend Boost with Snippets and Docs</h1>
          <h4 style={{ fontWeight: 400 }}>
            This is a paragraph demonstrating the text styling with the Inter
            font. It is designed to be clean and readable, suitable for modern
            web UI trends.
          </h4>
          <div className="flex">
            <Link to="/buttons">
              <button className="button button-large bg-purple hover-slide-up">
                Explore Here
              </button>
            </Link>
            <Link to="/documentation">
              <button className="button button-large light-purple">
                Documentation
              </button>
            </Link>
          </div>
        </div>
        <div></div>
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
      </div>
  );
}

export default Home;
