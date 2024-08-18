import React, { useState, useEffect, useRef } from 'react';

const TabSliderSimple = () => {
  const [activeTab, setActiveTab] = useState(0);
  const indicatorRef = useRef(null);

  useEffect(() => {
    updateIndicator();
    // Recalculate indicator position on window resize
    window.addEventListener('resize', updateIndicator);
    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeTab]);

  const updateIndicator = () => {
    if (indicatorRef.current) {
      const activeTabElement = document.querySelectorAll('.custom-tab')[activeTab];
      indicatorRef.current.style.width = activeTabElement.offsetWidth + 'px';
      indicatorRef.current.style.left = activeTabElement.offsetLeft + 'px';
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="custom-tab-container">
      <button
        className={`custom-tab ${activeTab === 0 ? 'custom-tab-active' : ''}`}
        onClick={() => handleTabClick(0)}
      >
        Example
      </button>
      <button
        className={`custom-tab ${activeTab === 1 ? 'custom-tab-active' : ''}`}
        onClick={() => handleTabClick(1)}
      >
        Example
      </button>
      <button
        className={`custom-tab ${activeTab === 2 ? 'custom-tab-active' : ''}`}
        onClick={() => handleTabClick(2)}
      >
        Example
      </button>
      <button
        className={`custom-tab ${activeTab === 3 ? 'custom-tab-active' : ''}`}
        onClick={() => handleTabClick(3)}
      >
        Example
      </button>
      <div className="custom-tab-indicator" ref={indicatorRef}></div>
    </div>
  );
};

export default TabSliderSimple;
