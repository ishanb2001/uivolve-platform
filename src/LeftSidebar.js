import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LeftSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const navigateToPage = (path) => {
    navigate(path);
  };

  const isActive = (path) => location.pathname === `/${path}`;

  return (
    <ul>
      <div className={`dropdown-container ${activeDropdown === 'dropdown2' ? 'active' : ''}`} id="dropdown2">
        <div
          className={`black-text dropdown-header ${isActive('introduction') ? 'bold' : ''}`}
          onClick={() => navigateToPage('introduction')}
        >
          Introduction
        </div>
        <div
          className={`black-text dropdown-header ${isActive('buttons-library') ? 'bold' : ''}`}
          onClick={() => navigateToPage('buttons-library')}
        >
          Buttons
        </div>
        <div
          className={`black-text dropdown-header ${isActive('cards-library') ? 'bold' : ''}`}
          onClick={() => navigateToPage('cards-library')}
        >
          Cards
        </div>
        <div
          className={`black-text dropdown-header ${isActive('navbar-library') ? 'bold' : ''}`}
          onClick={() => navigateToPage('navbar-library')}
        >
          Avatars
        </div>
        <div
          className={`black-text dropdown-header ${isActive('dropdown-page') ? 'bold' : ''}`}
          onClick={() => navigateToPage('dropdown-page')}
        >
          Dropdown
        </div>
        <div
          className={`black-text dropdown-header ${isActive('dropdown-page') ? 'bold' : ''}`}
          onClick={() => navigateToPage('tab-slider')}
        >
          Tabs
        </div>
        <div
          className={`black-text dropdown-header ${isActive('dropdown-page') ? 'bold' : ''}`}
          onClick={() => navigateToPage('tab-slider')}
        >
          Menu Library
        </div>
        
        <ul className="dropdown-content">
          <li className={`dropdown-item ${isActive('buttons-library') ? 'bold' : ''}`} onClick={() => navigateToPage('buttons-library')}>Buttons</li>
          <li className={`dropdown-item ${isActive('cards-library') ? 'bold' : ''}`} onClick={() => navigateToPage('cards-library')}>Sidebar</li>
          <li className={`dropdown-item ${isActive('navbar-library') ? 'bold' : ''}`} onClick={() => navigateToPage('navbar-library')}>Main Content</li>
          <li className={`dropdown-item ${isActive('dropdown-page') ? 'bold' : ''}`} onClick={() => navigateToPage('dropdown-page')}>Sidebarr</li>
          <li className={`dropdown-item ${isActive('tab-slider') ? 'bold' : ''}`} onClick={() => navigateToPage('tab-slider')}>Main Content</li>
        </ul>
      </div>

      

      
    </ul>
  );
};

export default LeftSidebar;
