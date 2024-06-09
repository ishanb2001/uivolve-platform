import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LeftSidebar from './LeftSidebar';
import Introduction from './Introduction';
import Overview from './Overview';
import DrawerPage from './DrawerPage';
import Buttons from './Buttons';
import Cards from './Cards';
import NavbarSnippets from './NavbarSnippets';
import Navbar from './Navbar';

const ButtonsPage = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const navigateToPage = (path) => {
    navigate(path);
  };
  
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

  const toggleFlyoutMenu = () => {
    setIsFlyoutVisible(!isFlyoutVisible);
  };

  const closeFlyoutMenu = () => {
    setIsFlyoutVisible(false);
  };

  const handleClickOutside = (event) => {
    if (isFlyoutVisible && !document.querySelector('.flyout-menu').contains(event.target)) {
      closeFlyoutMenu();
    }
  };

  useEffect(() => {
    if (isFlyoutVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFlyoutVisible]);

  return (
    <div className="Menu">
      {isFlyoutVisible && <div className="overlay show" onClick={closeFlyoutMenu}></div>}
      <div className="left-sidebar">
        <LeftSidebar />
      </div>

      <div className="main-content">
        <div className="list-container">
          <button onClick={toggleFlyoutMenu}>hi</button>
          <div className={`flyout-menu ${isFlyoutVisible ? 'open' : ''}`}>
            <div className="close-button" onClick={closeFlyoutMenu}>×</div>
            <div className={`dropdown-container ${activeDropdown === 'dropdown2' ? 'active' : ''}`} id="dropdown2">
        <div className="button black-text dropdown-header" onClick={() => navigateToPage('introduction')}>
          Introduction
        </div>
        <div className="button black-text dropdown-header" onClick={() => toggleDropdown('dropdown2')}>
          UI Elements
          <span className="arrow">▼</span>
        </div>
        <ul className="dropdown-content">
          
          <li className="dropdown-item" onClick={() => navigateToPage('buttons-library')}>Buttons</li>
          <li className="dropdown-item" onClick={() => navigateToPage('cards-library')}>Sidebar</li>
          <li className="dropdown-item" onClick={() => navigateToPage('navbar-library')}>Main Content</li>
        </ul>
      </div>
          </div>
        </div>
        <Routes>
          <Route path="introduction" element={<Introduction />} />
          <Route path="overview" element={<Overview />} />
          <Route path="drawerpage" element={<DrawerPage />} />
          <Route path="buttons-library" element={<Buttons />} />
          <Route path="cards-library" element={<Cards />} />
          <Route path="navbar-library" element={<NavbarSnippets />} />
        </Routes>
      </div>
    </div>
  );
};

export default ButtonsPage;
