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
        <div className="black-text dropdown-header" onClick={() => navigateToPage('introduction')}>
          Introduction
        </div>
        <div className="black-text dropdown-header" onClick={() => toggleDropdown('dropdown2')}>
          UI Elements
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 16L6 10H18L12 16Z" fill="currentColor"/>
</svg>

        </div>
        <ul className="dropdown-content">
          
          <li className="dropdown-item" onClick={() => navigateToPage('buttons-library')}>Buttons</li>
          <li className="dropdown-item" onClick={() => navigateToPage('cards-library')}>Sidebar</li>
          <li className="dropdown-item" onClick={() => navigateToPage('navbar-library')}>Main Content</li>
          <li className="dropdown-item" onClick={() => navigateToPage('dropdown-page')}>Sidebar</li>
          <li className="dropdown-item" onClick={() => navigateToPage('tab-slider')}>Main Content</li>
        </ul>
      </div>

      <div className={`dropdown-container ${activeDropdown === 'dropdown3' ? 'active' : ''}`} id="dropdown3">
        <div className="black-text dropdown-header" onClick={() => toggleDropdown('dropdown3')}>
          Tools
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 16L6 10H18L12 16Z" fill="currentColor"/>
</svg>

        </div>
        <ul className="dropdown-content">
          <li className="dropdown-item">Editor</li>
          <li className="dropdown-item">Terminal</li>
          <li className="dropdown-item">Debugger</li>
        </ul>
      </div>

      <div className={`dropdown-container ${activeDropdown === 'dropdown4' ? 'active' : ''}`} id="dropdown4">
        <div className="black-text dropdown-header" onClick={() => toggleDropdown('dropdown4')}>
          Settings
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 16L6 10H18L12 16Z" fill="currentColor"/>
</svg>

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
