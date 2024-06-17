import React from 'react';
import ButtonBox from './ButtonBox';
import './App.css';

const Buttons = () => {
  return (
    <div className="buttons-container">
      <div className="flex-container">
        <div className='comp-card'>
          <ButtonBox popupContent={
            <div>
              <pre className="code">
        
        <span className="keyword">import</span> <span className="class">React</span> <span className="keyword">from</span> <span className="string">'react'</span>;<br />
        <span className="keyword">import</span> {'{'} <span className="class">Flex</span>, <span className="class">Radio</span> {'}'} <span className="keyword">from</span> <span className="string">'antd'</span>;<br /><br />
        <span className="keyword">const</span> <span className="variable">baseStyle</span>: <span className="class">React.CSSProperties</span> = {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;width: <span className="string">'25%'</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;height: <span className="number">54</span>,<br />
        {'}'};
      </pre>
            </div>
          }>
            <button className='button bg-purple button-arrow-slide'>
              <span>Arrow Slide Slide</span>
            </button>
          </ButtonBox>
        </div>
        <div className='comp-card'>
          <ButtonBox popupContent={
            <div>
              <h2>Custom Popup Content 2</h2>
              <p>This is custom content inside the popup for Button 2.</p>
            </div>
          }>
            <button className='button bg-purple test shadow-black'>Learn More</button>
          </ButtonBox>
        </div>
        <div className='comp-card'>
          <ButtonBox popupContent={
            <div>
              <h2>Custom Popup Content 3</h2>
              <p>This is custom content inside the popup for Button 3.</p>
            </div>
          }>
            <button className='button bg-red lift-effect'>Learn More</button>
          </ButtonBox>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
