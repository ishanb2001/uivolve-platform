import React, { useState } from 'react';
import './Block.css';

const FunctionLayout = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="container-custom">
      
      <div className="step-custom button border-grey">set toastButton to element with id 'toast-btn'</div>
      <div className="step-custom button border-grey">set toastContainer to element with id 'toast-container'</div>
      
      <div className="function-title-custom button">Function showToast</div>
      <div className='function-elements'>
        <div className="step-custom button border-grey">set <strong>toast</strong> to new div element</div>
        <div className="step-custom button border-grey">add class 'toast' to <strong>toast</strong></div>
        <div className="step-custom button border-grey">set text of <strong>toast</strong> to 'This is a toast notification!'</div>
        <div className="step-custom button border-grey">append <strong>toast</strong> to toastContainer</div>

        <div className="step-custom button border-grey" onClick={toggleDropdown}>
        wait for 10 milliseconds &#9662;
        </div>
        <div className={`dropdown-content-custom ${isDropdownVisible ? 'visible' : 'hidden'}`}>
          <div className="nested-step-custom button border-grey">add class 'show' to toast</div>
        </div>
      </div>
      <div className="end-function-custom button">End Function</div>
      <div className="step-custom button border-grey">Attach Event Listener</div>
    </div>
  );
};

const ExpandingButton = () => {
  return <FunctionLayout />;
};

export default ExpandingButton;
