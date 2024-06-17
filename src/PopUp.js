import React, { useState, useEffect } from 'react';
import './App.css';

const Popup = ({ closePopup, children }) => {
  const popupRef = React.useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsClosing(true);
        setTimeout(() => {
          closePopup();
          setIsClosing(false);
        }, 300);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupRef, closePopup]);

  return (
    <div className={`popup-overlay visible ${isClosing ? 'closing' : ''}`}>
      <div className={`popup-content ${isClosing ? 'closing' : ''}`} ref={popupRef}>
        {children}
        <button className="button bg-purple" onClick={() => {
          setIsClosing(true);
          setTimeout(() => {
            closePopup();
            setIsClosing(false);
          }, 300);
        }}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
