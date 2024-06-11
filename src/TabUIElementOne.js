import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function TabUIElementOne() {
  const [activeTab, setActiveTab] = useState(3);
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
    <div className="tab-container">
      {["Screens", "UI Elements", "Flows", "Text in Screenshot"].map((tab, index) => (
        <button
          key={index}
          className="tab"
          onClick={() => setActiveTab(index)}
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
