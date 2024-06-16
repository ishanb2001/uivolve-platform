import React from 'react';
import ButtonBox from './ButtonBox';
import './App.css';

const Buttons = () => {
  return (
    <div className="buttons-container">
      <div className="flex-container">
        <div className='comp-card'>
          <ButtonBox>
            <button styles={{marginTop: 30, marginBottom: 30, }} className='button bg-purple button-arrow-slide'>
              <span>Arrow Slide Slide</span>
            </button>
          </ButtonBox>
        </div>
        <div className='comp-card'>
          <ButtonBox>
            <button className='button bg-purple test shadow-black'>Learn More</button>
          </ButtonBox>
        </div>
        <div className='comp-card'>
          <ButtonBox>
            <button className='button bg-red lift-effect'>Learn More</button>
          </ButtonBox>
        </div>
        <div className='comp-card'>
          <ButtonBox>
            <button className='button bg-red lift-effect'>Learn More</button>
          </ButtonBox>
        </div>
      </div>

      <div className="flex-container">
        <div className='comp-card'>
          <ButtonBox>
            <button className='button bg-purple button-arrow-slide'>
              <span>Arrow Slide Slide</span>
            </button>
          </ButtonBox>
        </div>
        <div className='comp-card'>
          <ButtonBox>
            <button className='button bg-purple test shadow-black'>Learn More</button>
          </ButtonBox>
        </div>
        <div className='comp-card'>
          <ButtonBox>
            <button className='button bg-red lift-effect'>Learn More</button>
          </ButtonBox>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
