import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './App.css';

function TabUIElementOne({ tabs }) {
  const indicatorRef = useRef(null);
  const tabsRef = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  const tabRoutes = [
    '/overview/documentation', // Screens tab
    '/',           // UI Elements tab
    '/flows'                  // Flows tab
  ];

  const getActiveTab = () => {
    const currentPath = location.pathname;
    return tabRoutes.indexOf(currentPath);
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());

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
    setActiveTab(getActiveTab());
  }, [location]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    navigate(tabRoutes[index]); // Navigate to the route corresponding to the clicked tab
  };

  return (
    <div className="tab-container">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`tab ${activeTab === index ? 'active' : ''}`}
          onClick={() => handleTabClick(index)}
          ref={el => tabsRef.current[index] = el}
        >
          {tab}
        </button>
      ))}
      <div className="tab-indicator" ref={indicatorRef}></div>
    </div>
  );
}

export default TabUIElementOne;
