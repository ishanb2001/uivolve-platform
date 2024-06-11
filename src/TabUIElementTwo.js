import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function CustomTabUI() {
  const [activeTab, setActiveTab] = useState(0);
  const indicatorRef = useRef(null);
  const tabsRef = useRef([]);

  useEffect(() => {
    const tab = tabsRef.current[activeTab];
    const tabWidth = tab.offsetWidth;
    const tabLeft = tab.offsetLeft;
    indicatorRef.current.style.width = `${tabWidth}px`;
    indicatorRef.current.style.left = `${tabLeft}px`;
  }, [activeTab]);

  return (
    <div className="custom-tab-container">
      {["Example", "Example", "Example", "Example"].map((tab, index) => (
        <button
          key={index}
          className={`custom-tab ${activeTab === index ? 'custom-tab-active' : ''}`}
          onClick={() => setActiveTab(index)}
          ref={el => tabsRef.current[index] = el}
        >
          {tab}
        </button>
      ))}
      <div className="custom-tab-indicator" ref={indicatorRef}></div>
    </div>
  );
}

export default CustomTabUI;
