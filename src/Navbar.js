import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaTwitter, FaBars, FaTimes } from 'react-icons/fa'; 
import Logo from './images/uivolve-logo.png';
import ThreeAvatar from './ThreeAvatar';
import AvatarWithStatus from './AvatarWithStatus';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 

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
    navigate('/overview/documentation');
  };

  const AboutPage = () => {
    navigate('/about');
  };

  const ContactPage = () => {
    navigate('/contact');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleButtonClick = (action) => {
    setMenuOpen(false);
    action();
  };

  const navigateToTabSlidePage = () => {
    navigate('/tab-slider');
  };

  return (
    <div className="navbar navbar-fixed white-bg">
      
      <div className="navbar-inner flex is-align-items-center">
        <img style={{ width: 40 }} src={Logo} alt="UIVolve Logo" />
        <ul className="nav">
          <li className="nav-item">
            <a href="#" style={{ textDecoration: "none" }} className="button nav-link">Components
            <FaChevronDown className={`arrow-icon ${visibleDropdown === 'componentsDropdown' ? 'rotate' : ''}`} />
            </a>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", width: "500px" }} className="dropdown-menu">
              <div>
              <a href="#" onClick={Documentation} className="dropdown-link">
                Menu 1-1
                <p className="paragraph" style={{ textDecoration: "none" }}>
                  Lorem Ipsum is simply dummy text of the printing.
                </p>
              </a>
              <a href="#" className="dropdown-link">
                Menu 1-2
                <p className="paragraph" style={{ textDecoration: "none" }}>
                  Lorem Ipsum is simply dummy text of the printing.
                </p>
              </a>
              <a href="#" className="dropdown-link">
                Menu 1-3
                <p className="paragraph" style={{ textDecoration: "none" }}>
                  Lorem Ipsum is simply dummy text of the printing.
                </p>
              </a>
              </div>
              <div>
              <a href="#" onClick={Documentation} className="dropdown-link">
                Menu 1-1
                <p className="paragraph" style={{ textDecoration: "none" }}>
                  Lorem Ipsum is simply dummy text of the printing.
                </p>
              </a>
              <a href="#" className="dropdown-link">
                Menu 1-2
                <p className="paragraph" style={{ textDecoration: "none" }}>
                  Lorem Ipsum is simply dummy text of the printing.
                </p>
              </a>
              <a href="#" className="dropdown-link">
                Menu 1-3
                <p className="paragraph" style={{ textDecoration: "none" }}>
                  Lorem Ipsum is simply dummy text of the printing.
                </p>
              </a>
              </div>
            </div>
          </li>
          
        </ul>
        {isMobile ? (
          <div className="mobile-menu">
            <button className="hamburger" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            {menuOpen && (
              <div className="dropdown-menu">
                <button className="button bg-black fade-element" onClick={() => handleButtonClick(Documentation)}>
                  Documentation
                </button>
                <button className="button" onClick={() => handleButtonClick(HomePage)}>Home</button>
                <button className="button" onClick={() => handleButtonClick(AboutPage)}>About</button>
                <button className="button" onClick={() => handleButtonClick(ContactPage)}>Contact</button>
              </div>
            )}
          </div>
        ) : (
          <div className="navbar-menu flex">
            <div className="flex is-justify-content-flex-start">
            <div className="menu-container">
            <li className="nav-item">
            <a href="#" style={{ textDecoration: "none" }} className="button nav-link">Components
            <FaChevronDown className={`arrow-icon ${visibleDropdown === 'componentsDropdown' ? 'rotate' : ''}`} />
            </a>
            <div style={{width: "200px"}} className="dropdown-menu">
              <div>
              <a href="#" onClick={Documentation} className="dropdown-link">
                Menu 1-1
                <p className="paragraph" style={{ textDecoration: "none" }}>
                  Lorem Ipsum is simply dummy text of the printing.
                </p>
              </a>
              <a href="#" className="dropdown-link">
                Menu 1-2
                <p className="paragraph" style={{ textDecoration: "none" }}>
                  Lorem Ipsum is simply dummy text of the printing.
                </p>
              </a>
              <a href="#" className="dropdown-link">
                Menu 1-3
                <p className="paragraph" style={{ textDecoration: "none" }}>
                  Lorem Ipsum is simply dummy text of the printing.
                </p>
              </a>
              </div>
              <div>
              
              
              
              </div>
            </div>
          </li>
              </div>
              <div className="menu-container">
                <button className="button black-text button-medium" onClick={HomePage}>Home</button>
              </div>
              
              
              <div className="menu-container">
                <button className="button black-text button-medium" onClick={Documentation}>Documentation</button>
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
                <button onClick={navigateToTabSlidePage} className="button nav-link">
                  Join The Community
                </button>
              </div>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
