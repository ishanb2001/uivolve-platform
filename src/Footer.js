import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa'; // Import the icons
import Logo from './images/uivolve-logo-full.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="social-icons">
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
