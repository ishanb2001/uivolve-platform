import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Custom.css'; 
import './App.css'; 
import Navbar from './Navbar';
import GradientImage from './images/gradient-image-1.png';
import GradientImage2 from './images/gradient-image-2.png';
import GradientImage3 from './images/gradient-image-3.png';
import GradientImage4 from './images/gradient-image-4.png';
import TabUIElementOne from './TabUIElementOne.js';
import HoverMenuExample from './HoverMenuExample.js';
import ButtonsThumbnail from './images/button.png';
import TabsThumbnail from './images/tab.png';
import CardThumbnail from './images/card.png';
import AvatarThumbnails from './images/avatar.png';

const Home = () => {

  useEffect(() => {
    
    const elements = document.querySelectorAll('.fade-element');
    elements.forEach(el => el.classList.add('fade-up'));

    
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-element');
      elements.forEach(el => {
        if (isElementInViewport(el)) {
          el.classList.add('wiggle-up');
        }
      });
    };

    
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div style={{ marginTop: 170, marginBottom: 30 }} className="App">
        <Navbar />
        <div style={{ display: 'flex' }}>
          <div>
            <h1 style={{ marginBottom: 20 }} className="font-giant shiny-text fade-element">Frontend Boost with Snippets and Docs</h1>
            <p style={{ marginBottom: 20, fontSize: 18 }} className="fade-element">We are dedicated to empowering developers and designers by providing a comprehensive, modern, and trendy library of frontend UI code snippets and detailed documentation.</p>
          </div>
          
        </div>
        <div style={{ marginBottom: 90 }}>
          <button className="button button-medium bg-black fade-element">
            Documentation
          </button>
          <HoverMenuExample/>
        </div>
        <div className="homepage-cards">
          <div className="card-container">
            <div className="white-bg card scroll-element" style={{ backgroundImage: `url(${ButtonsThumbnail})` }}>
              <div className="card-content"></div>
            </div>
            <div className="card-text">
              <h1 className="black-text">Buttons</h1>
            </div>
          </div>

          <div className="card-container">
            <div className="white-bg card scroll-element" style={{ backgroundImage: `url(${TabsThumbnail})` }}>
              <div className="card-content"></div>
            </div>
            <div className="card-text">
              <h1 className="black-text">Cards</h1>
            </div>
          </div>
          
          <div className="card-container">
            <div className="white-bg card scroll-element" style={{ backgroundImage: `url(${CardThumbnail})` }}>
              <div className="card-content"></div>
            </div>
            <div className="card-text">
              <h1 className="black-text">Avatars</h1>
            </div>
          </div>

          <div className="card-container">
            <div className="white-bg card scroll-element" style={{ backgroundImage: `url(${AvatarThumbnails})` }}>
              <div className="card-content"></div>
            </div>
            <div className="card-text">
              <h1 className="black-text">Menu (Dropdown)</h1>
            </div>
          </div>
          
        </div>

        <div className="homepage-cards">
          <div className="card-container">
            <div className="white-bg card scroll-element" style={{ backgroundImage: `url(${ButtonsThumbnail})` }}>
              <div className="card-content"></div>
            </div>
            <div className="card-text">
              <h1 className="black-text">Buttons</h1>
            </div>
          </div>

          <div className="card-container">
            <div className="white-bg card scroll-element" style={{ backgroundImage: `url(${TabsThumbnail})` }}>
              <div className="card-content"></div>
            </div>
            <div className="card-text">
              <h1 className="black-text">Cards</h1>
            </div>
          </div>
          
          <div className="card-container">
            
          </div>

          <div className="card-container">
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
