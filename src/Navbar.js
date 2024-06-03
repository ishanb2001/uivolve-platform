import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaTwitter } from 'react-icons/fa'; 

const Navbar = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (dropdown) => {
    setVisibleDropdown(visibleDropdown === dropdown ? null : dropdown);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.menu-container')) {
      setVisibleDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const HomePage = () => {
    navigate('/home');
  };

  const Documentation = () => {
    navigate('/overview');
  };

  return (
    <div className="navbar navbar-fixed white-bg">
      <div className="navbar-inner flex is-align-items-center">
        <div className="logo">Logo</div>
        <div className="flex">
          <div className="flex is-justify-content-flex-start">
            <div className="menu-container">
              <button className="button black-text border-grey" onClick={HomePage}>Home</button>
            </div>
            <div className="menu-container">
              <button className="button black-text border-grey" onClick={Documentation}>Documentation</button>
              
              
            </div>
          </div>
          <div className="flex is-justify-content-flex-end">
          <div class="flex is-justify-content-flex-end is-align-items-center">
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        </div>
            <div className="menu-container">
              
              <button className="button black-text border-grey" onClick={() => toggleDropdown(3)}>Blog</button>
              
              <div className={`dropdown ${visibleDropdown === 3 ? 'show' : ''}`}>
                <a href="#" className="dropdown-item">Profile</a>
                <a href="#" className="dropdown-item">Settings</a>
                <a href="#" className="dropdown-item">Logout</a>
              </div>
            </div>
            <div className="menu-container">
              <button className="button bg-purple" onClick={() => toggleDropdown(4)}>Contact</button>
              <div className={`dropdown ${visibleDropdown === 4 ? 'show' : ''}`}>
                <a href="#" className="dropdown-item">Profile</a>
                <a href="#" className="dropdown-item">Settings</a>
                <a href="#" className="dropdown-item">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
