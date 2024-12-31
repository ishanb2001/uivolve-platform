import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function TabUIElementOne({ tabs, defaultActiveTab, setActiveTab }) {
  const [activeTab, localSetActiveTab] = useState(defaultActiveTab || 0);
  const indicatorRef = useRef(null);
  const tabsRef = useRef([]);

  useEffect(() => {
    const tab = tabsRef.current[activeTab];
    if (tab) {
      const tabWidth = tab.offsetWidth;
      const tabLeft = tab.offsetLeft;
      indicatorRef.current.style.width = `${tabWidth}px`;
      indicatorRef.current.style.left = `${tabLeft}px`;
    }
  }, [activeTab]);

  const handleTabClick = (index) => {
    localSetActiveTab(index);
    if (setActiveTab) {
      setActiveTab(index);
    }
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
