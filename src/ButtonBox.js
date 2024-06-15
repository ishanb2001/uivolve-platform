import React from 'react';
import './App.css';

const ButtonBox = ({ children }) => {
  return (
    <div className='comp-wrapper'>
      {children}
      <button className='corner-button button tint-grey button-small'>Code</button>
    </div>
  );
};

export default ButtonBox;
