import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LeftSidebar = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <ul>
      <div className={`dropdown-container ${activeDropdown === 'dropdown2' ? 'active' : ''}`} id="dropdown2">
        <div className="button black-text dropdown-header" onClick={() => navigateToPage('introduction')}>
          Introduction
        </div>
        <div className="button black-text dropdown-header" onClick={() => toggleDropdown('dropdown2')}>
          UI Elements
          <span className="arrow">▼</span>
        </div>
        <ul className="dropdown-content">
          <li className="dropdown-item" onClick={() => navigateToPage('overview')}>Overview</li>
          <li className="dropdown-item" onClick={() => navigateToPage('drawerpage')}>Header</li>
          <li className="dropdown-item">Footer</li>
          <li className="dropdown-item">Sidebar</li>
          <li className="dropdown-item">Main Content</li>
        </ul>
      </div>

      <div className={`dropdown-container ${activeDropdown === 'dropdown3' ? 'active' : ''}`} id="dropdown3">
        <div className="button black-text dropdown-header" onClick={() => toggleDropdown('dropdown3')}>
          Tools
          <span className="arrow">▼</span>
        </div>
        <ul className="dropdown-content">
          <li className="dropdown-item">Editor</li>
          <li className="dropdown-item">Terminal</li>
          <li className="dropdown-item">Debugger</li>
        </ul>
      </div>

      <div className={`dropdown-container ${activeDropdown === 'dropdown4' ? 'active' : ''}`} id="dropdown4">
        <div className="button black-text dropdown-header" onClick={() => toggleDropdown('dropdown4')}>
          Settings
          <span className="arrow">▼</span>
        </div>
        <ul className="dropdown-content">
          <li className="dropdown-item">Profile</li>
          <li className="dropdown-item">Security</li>
          <li className="dropdown-item">Notifications</li>
          <li className="dropdown-item">Privacy</li>
          <li className="dropdown-item">Account</li>
        </ul>
      </div>
    </ul>
  );
};

export default LeftSidebar;
