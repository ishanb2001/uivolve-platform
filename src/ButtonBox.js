import React, { useState } from 'react';
import Popup from './PopUp';
import './App.css';

const ButtonBox = ({ children, popupContent }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="box">
      <button className="internalButton" onClick={togglePopup}>View Code</button>
      <div className="content">
        <div style={{ marginTop: '30px', marginBottom: '30px' }}>
          {children}
        </div>
      </div>
      {isPopupVisible && <Popup closePopup={togglePopup}>{popupContent}</Popup>}
    </div>
  );
};

export default ButtonBox;
