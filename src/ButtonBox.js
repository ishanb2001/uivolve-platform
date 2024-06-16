import React from 'react';
import './App.css';

const ButtonBox = ({ children }) => {
  return (
    <div className="box">
      <button className="internalButton">Button</button>
      <div className="content">
        <div style={{ marginTop: '30px', marginBottom: '30px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ButtonBox;
