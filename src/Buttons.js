import React from 'react';
import ButtonBox from './ButtonBox';
import './App.css';

const Buttons = () => {
  return (
    <div>
      <div className="flex-container">
        <div className='comp-card'>
          <ButtonBox />
          <button  className='button bg-purple'>Learn More</button>
        </div>
        <div className='comp-card'>
          <ButtonBox />
          <button className='button border-grey'>Learn More</button>
        </div>
        <div className='comp-card'>
          <ButtonBox />
          <button className='button border-purple'>Learn More</button>
        </div>
        <div className='comp-card'>
          <ButtonBox />
          <button className='button light-purple'>Learn More</button>
        </div>
      </div>

      <div className="flex-container">
        <div className='comp-card'>
          <ButtonBox />
          <button className='button bg-purple button-arrow-slide'>
            <span>Arrow Slide Slide</span>
          </button>
        </div>
        <div className='comp-card'>
          <ButtonBox />
          <button className='button bg-purple test shadow-black'>Learn More</button>
        </div>
        <div className='comp-card'>
          <ButtonBox />
          <button className='button bg-red lift-effect'>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
