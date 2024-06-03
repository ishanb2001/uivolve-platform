

import React from 'react';
import './Homepage.css'; 

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to My Website</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about" className="homepage-section">
          <h2>About Us</h2>
          <p>We are a company that values excellence and customer satisfaction...</p>
        </section>
        <section id="services" className="homepage-section">
          <h2>Our Services</h2>
          <p>We offer a wide range of services to meet your needs...</p>
        </section>
        <section id="contact" className="homepage-section">
          <h2>Contact Us</h2>
          <p>Feel free to reach out via email at contact@example.com...</p>
        </section>
      </main>
      <footer className="homepage-footer">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
