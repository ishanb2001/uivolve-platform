import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Custom.css'; 
import './App.css'; 
import Navbar from './Navbar';

const Home = () => {

  useEffect(() => {
    // Add fade-up class to all elements on initial load
    const elements = document.querySelectorAll('.fade-element');
    elements.forEach(el => el.classList.add('fade-up'));

    // Handle scroll events for wiggle animation
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-element');
      elements.forEach(el => {
        if (isElementInViewport(el)) {
          el.classList.add('wiggle-up');
        }
      });
    };

    // Check if element is in viewport
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup scroll event listener on component unmount
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
            <h1 style={{ marginBottom: 30 }} className="font-giant shiny-text fade-element">Frontend Boost with Snippets and Docs</h1>
            <p style={{ marginBottom: 30 }} className="fade-element">Join the millions of companies of all sizes that use Stripe to accept payments online and in person, embed financial services.</p>
          </div>
        </div>
        <div style={{ marginBottom: 90 }}>
          <button className="button button-medium bg-black fade-element">
            Documentation
          </button>
        </div>
        <div className="homepage-cards">
          <div className="purple-bg test shadow-black card is-flex-grow-4 flex is-flex-direction-column is-justify-content-space-between scroll-element">
            <div className="card-content">
              <div className="label white-bg black-text label-rounded">MEMBERSHIP</div>
            </div>
            <div className="card-content">
              <h1 className="white-text">EvoCSS</h1>
            </div>
          </div>
          <div className="green-bg test shadow-black card is-flex-grow-4 flex is-flex-direction-column is-justify-content-space-between scroll-element">
            <div className="card-content">
              <div className="label white-bg black-text label-rounded">MEMBERSHIP</div>
            </div>
            <div className="card-content">
              <h1 className="white-text">EvoMail</h1>
            </div>
          </div>
          <div className="flex is-flex-direction-column is-justify-content-space-between">
            <div className="white-bg test shadow-black card is-flex-grow-1 flex is-flex-direction-column is-justify-content-space-between scroll-element">
              <div className="card-content">
                <div className="label green-bg white-text label-rounded">MEMBERSHIP</div>
              </div>
              <div className="card-content">
                <h1 className="black-text ">Video Lessons</h1>
              </div>
            </div>
            <div className="white-bg test shadow-black card flex is-flex-direction-column is-justify-content-space-between scroll-element">
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
    </div>
  );
}

export default Home;
