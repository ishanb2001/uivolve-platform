import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaTwitter, FaBars, FaTimes } from 'react-icons/fa'; 
import Logo from './images/uivolve-logo.png';

const Navbar = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (dropdown) => {
    setVisibleDropdown(visibleDropdown === dropdown ? null : dropdown);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.menu-container')) {
      setVisibleDropdown(null);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 770);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const HomePage = () => {
    navigate('/');
  };

  const Documentation = () => {
    navigate('/overview');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar navbar-fixed white-bg">
      <div className="navbar-inner flex is-align-items-center">
        <img style={{ width: 40 }} src={Logo} alt="UIVolve Logo" />
        {isMobile ? (
          <div className="mobile-menu">
            <button className="hamburger" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            {menuOpen && (
              <div className="dropdown-menu">
                <button style={{ width: '100%' }} className="button black-text border-grey" onClick={HomePage}>Home</button>
                <button style={{ width: '100%' }} className="button black-text border-grey" onClick={Documentation}>Documentation</button>
                <button style={{ width: '100%' }} className="button black-text border-grey" onClick={() => toggleDropdown(3)}>Blog</button>
                <div className={`dropdown ${visibleDropdown === 3 ? 'show' : ''}`}>
                  <a href="#" className="dropdown-item">Profile</a>
                  <a href="#" className="dropdown-item">Settings</a>
                  <a href="#" className="dropdown-item">Logout</a>
                </div>
                <button style={{width: '100%'}} className="button bg-purple" onClick={() => toggleDropdown(4)}>Contact</button>
                <div className={`dropdown ${visibleDropdown === 4 ? 'show' : ''}`}>
                  <a href="#" className="dropdown-item">Profile</a>
                  <a href="#" className="dropdown-item">Settings</a>
                  <a href="#" className="dropdown-item">Logout</a>
                </div>
                
              </div>
            )}
          </div>
        ) : (
          <div className="navbar-menu flex">
            <div className="flex is-justify-content-flex-start">
              <div className="menu-container">
                <button className="button black-text border-grey" onClick={HomePage}>Home</button>
              </div>
              <div className="menu-container">
                <button className="button black-text border-grey" onClick={Documentation}>Documentation</button>
              </div>
            </div>
            <div className="flex is-justify-content-flex-end">
              <div className="flex is-justify-content-flex-end is-align-items-center">
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
                <button className="button button-medium bg-black" onClick={() => toggleDropdown(4)}>Contact</button>
                <div className={`dropdown ${visibleDropdown === 4 ? 'show' : ''}`}>
                  <a href="#" className="dropdown-item">Profile</a>
                  <a href="#" className="dropdown-item">Settings</a>
                  <a href="#" className="dropdown-item">Logout</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
