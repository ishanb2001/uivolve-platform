import React, { useState } from 'react';
import './App.css';

const Popup = ({ closePopup }) => (
  <div className="popup-overlay visible">
    <div className="popup-content">
      <h2>Popup Title</h2>
      <p>This is the content of the popup.</p>
      <button onClick={closePopup}>Close</button>
    </div>
  </div>
);

const ButtonBox = ({ children }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="box">
      <button className="internalButton" onClick={togglePopup}>Button</button>
      <div className="content">
        <div style={{ marginTop: '30px', marginBottom: '30px' }}>
          {children}
        </div>
      </div>
      {isPopupVisible && <Popup closePopup={togglePopup} />}
    </div>
  );
};

export default ButtonBox;
