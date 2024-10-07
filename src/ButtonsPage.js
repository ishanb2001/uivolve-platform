import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LeftSidebar from './LeftSidebar';
import Introduction from './Introduction';
import Overview from './Overview';
import DrawerPage from './DrawerPage';
import Buttons from './components/Buttons/Buttons';
import Cards from './Cards';
import NavbarSnippets from './NavbarSnippets';
import Navbar from './Navbar';
import DropDownPage from './DropDownPage';
import TabSlidePage from './TabSlidePage';

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
      <Navbar/>
      {isFlyoutVisible && <div className="overlay show" onClick={closeFlyoutMenu}></div>}
      <div className="left-sidebar">
        <LeftSidebar />
      </div>

      <div className="main-content">
        <div className="list-container">
          <button class="popout-menu" onClick={toggleFlyoutMenu}>
            

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 16 16">
        <path stroke="currentColor" stroke-width="2" fill="none" d="M11.5 8h-9a.5.5 0 0 0 0 1h9l-3.5 3.5a.5.5 0 0 0 .707.707l4.5-4.5a.5.5 0 0 0 0-.707l-4.5-4.5a.5.5 0 1 0-.707.707L11.5 8z"/>
    </svg>
          </button>
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
          
          
          <li className="dropdown-item" onClick={() => navigateToPage('dropdown-page')}>Dropdown</li>

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
          <Route path="dropdown-page" element={<DropDownPage />} />
          <Route path="tab-slider" element={<TabSlidePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default ButtonsPage;