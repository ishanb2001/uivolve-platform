import React from 'react';
import './App.css';

const ButtonBox = ({ children }) => {
  return (
    <div className='comp-wrapper'>
    {children}
    </div>
  );
};

export default ButtonBox;
