import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaGithub, FaTwitter, FaBars, FaTimes } from 'react-icons/fa'; 
import Logo from './images/uivolve-logo.png';

const tabs = ["Screens", "UI Elements", "Flows"];
const tabRoutes = [
  '/', // Screens tab
  '/overview/documentation',           // UI Elements tab
  '/overview/buttons-library'                  // Flows tab
];

const Navbar = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const indicatorRef = useRef(null);
  const tabsRef = useRef([]);

  const getActiveTab = () => {
    const currentPath = location.pathname;
    return tabRoutes.indexOf(currentPath);
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());

  useEffect(() => {
    setActiveTab(getActiveTab());
  }, [location]);

  useEffect(() => {
    const tab = tabsRef.current[activeTab];
    if (tab) {
      const tabWidth = tab.offsetWidth;
      const tabLeft = tab.offsetLeft;
      indicatorRef.current.style.width = `${tabWidth}px`;
      indicatorRef.current.style.left = `${tabLeft}px`;
    }
  }, [activeTab]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    navigate(tabRoutes[index]);
  };

  return (
    <div className="navbar navbar-fixed">
      <div className="navbar-inner flex is-align-items-center">
        <img style={{ width: 40 }} src={Logo} alt="UIVolve Logo" />
        {isMobile ? (
          <div className="mobile-menu">
            <button className="hamburger" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            {menuOpen && (
              <div className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`button ${activeTab === index ? 'active' : ''}`}
                    onClick={() => handleTabClick(index)}
                    style={{ fontSize: '13px' }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="navbar-menu flex">
            <div className="flex is-justify-content-flex-end">
              <div className="menu-container">
                <div className="tab-container">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      className={`tab ${activeTab === index ? 'active' : ''}`}
                      onClick={() => handleTabClick(index)}
                      ref={el => tabsRef.current[index] = el}
                      style={{ fontSize: '13px' }}
                    >
                      {tab}
                    </button>
                  ))}
                  <div className="tab-indicator" ref={indicatorRef}></div>
                </div>
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
                <button className="button button-medium bg-blue" onClick={() => setVisibleDropdown(3)} style={{ fontSize: '13px' }}>Join The Community</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
