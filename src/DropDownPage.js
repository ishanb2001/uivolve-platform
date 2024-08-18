import ButtonBox from './ButtonBox';
import './App.css';
import React from 'react';
import DropdownSimple from './DropDownSimple';

const DropDownPage = () => {
  const toggleVisibility = (event) => {
    const nextElement = event.target.nextElementSibling;
    if (nextElement.style.maxHeight) {
      nextElement.style.maxHeight = null;
    } else {
      nextElement.style.maxHeight = nextElement.scrollHeight + "px";
    }
  };

  return (
    <div>
      <div className="flex-container">
        <div className="comp-card">
          <ButtonBox>
            <DropdownSimple />
          </ButtonBox>
        </div>
      </div>
      <h2 className="subtitle">Pseudo Code with Color Coding and Labels</h2>
      <div className="code-container">
        <div className="code-block-wrapper">
          <div className="button border-grey" onClick={toggleVisibility}>Initialize Variables</div>
          <div className="code-block">
            <div className="code-line blue">Initialize activeDropdown to null</div>
          </div>
          <div className="button border-grey" onClick={toggleVisibility}>Add Event Listener</div>
          <div className="code-block">
            <div className="code-line green">On document click event</div>
            <div className="code-block">
              <div className="code-line orange">If activeDropdown is not null and click is outside of .nav element</div>
              <div className="code-block">
                <div className="code-line red">Call closeDropdown function</div>
              </div>
            </div>
          </div>
          <div className="button border-grey" onClick={toggleVisibility}>Function: closeDropdown</div>
          <div className="code-block">
            <div className="code-line orange">If activeDropdown is not null</div>
            <div className="code-block">
              <div className="code-line orange">Get dropdown element by id `dropdown-$ activeDropdown`</div>
              <div className="code-line red">Remove "active" class from dropdown element</div>
              <div className="code-line blue">Set activeDropdown to null</div>
            </div>
          </div>
          <div className="button border-grey" onClick={toggleVisibility}>Function: toggleDropdown</div>
          <div className="code-block">
            <div className="code-line orange">Prevent default action of event</div>
            <div className="code-line orange">Get dropdown element by id `dropdown-$ index`</div>
            <div className="code-line orange">If activeDropdown is equal to index</div>
            <div className="code-block">
              <div className="code-line red">Call closeDropdown function</div>
            </div>
            <div className="code-line red">Else</div>
            <div className="code-block">
              <div className="code-line orange">If activeDropdown is not null</div>
              <div className="code-block">
                <div className="code-line red">Call closeDropdown function</div>
              </div>
              <div className="code-line red">Add "active" class to dropdown element</div>
              <div className="code-line blue">Set activeDropdown to index</div>
            </div>
          </div>
        </div>
      </div>

      <div className="color-coding-explanation">
        <h3>Color Coding Guide</h3>
        <ul>
          <li><span className="color-code blue"></span> <strong>Blue</strong>: Variable initialization and resetting.</li>
          <li><span className="color-code green"></span> <strong>Green</strong>: Event handling and timers.</li>
          <li><span className="color-code orange"></span> <strong>Orange</strong>: Conditions and checks.</li>
          <li><span className="color-code red"></span> <strong>Red</strong>: Function calls and class manipulations.</li>
          <li><span className="color-code purple"></span> <strong>Purple</strong>: Labeling function definitions.</li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownPage;
