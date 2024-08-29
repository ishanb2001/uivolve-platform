import React, { useState } from 'react';
import ButtonBox from './ButtonBox';
import './App.css';
import DropdownMenu from './HoverMenu';
import DropdownSimple from './DropDownSimple';
import TabUIElementOne from './TabUIElementOne';

const DropDownPage = () => {
  const tabs = ["HTML", "CSS"];
  const [activeTab, setActiveTab] = useState(0);

  // State to track visibility of each parent and nested section
  const [visibility, setVisibility] = useState({
    initializeVariables: false,
    addEventListener: false,
    closeDropdown: false,
    toggleDropdown: false,
    nestedAddEventListener: false,
    nestedCloseDropdownIf: false, // Visibility state for "If activeDropdown is not null"
    nestedCloseDropdownContent: false,
    nestedToggleDropdownIf: false,
    nestedToggleDropdownElse: false,
  });

  // Function to toggle visibility for any section (parent or nested)
  const toggleVisibility = (key) => {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [key]: !prevVisibility[key], // Toggle the specific section's visibility
    }));
  };

  return (
    <div>
      <h1 style={{ marginBottom: 20 }}>Dropdown Menu</h1>
      <p style={{ marginBottom: 30 }}>We are dedicated to empowering developers and designers by providing a comprehensive, modern, and trendy library of frontend UI code snippets and detailed documentation.</p>
      <div className="flex-container">
        <div className="comp-card">
          <ButtonBox popupContent={
            <div>
              <TabUIElementOne tabs={tabs} defaultActiveTab={activeTab} setActiveTab={setActiveTab} />
              {/* Your buttons here */}
            </div>
          }>
            <DropdownSimple />
          </ButtonBox>
        </div>
      </div>

      {/* Pseudo Code Section */}
      <div style={{ marginBottom: 20, marginTop: 30 }} className="psudo-area-outer">
        <div className="psudo-area">
          <h2 style={{ marginBottom: 20, marginTop: 30, textAlign: 'center' }} className="subtitle">Pseudo Code with Color Coding and Labels</h2>
          <p style={{ marginBottom: 30, textAlign: 'center' }}>We are dedicated to empowering developers and designers by providing a comprehensive, modern, and trendy library of frontend UI code snippets and detailed documentation.</p>
          <div className="code-container">
            <div style={{ border: '1px solid rgb(243, 243, 243)', borderRadius: 10 }} className="code-block-wrapper">
              
              {/* Parent Dropdown: Initialize Variables (Blue - Variable Initialization) */}
              <div style={{ borderBottom: '1px solid rgb(243, 243, 243)', color:'white', backgroundColor: '#007bff' }} className="button-comp blue" onClick={() => toggleVisibility('initializeVariables')}>
              Initialize activeDropdown to null
              </div>
              

              {/* Parent Dropdown: Add Event Listener (Green - Event Handling) */}
              <div style={{ borderBottom: '1px solid rgb(243, 243, 243)', color:'white', backgroundColor: '#28a745' }} className="button-comp green" onClick={() => toggleVisibility('addEventListener')}>
                On document click event
              </div>
              {visibility.addEventListener && (
                <div className="code-block">
                  
                  <div className="code-block">
                    {/* Nested Toggle */}
                    <div style={{ backgroundColor: '#fd7e14' }} className="button-comp orange" onClick={() => toggleVisibility('nestedAddEventListener')}>
                      If activeDropdown is not null and click is outside of .nav element
                    </div>
                    {visibility.nestedAddEventListener && (
                      <div className="code-block">
                        <div className="code-line red">Call closeDropdown function</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Parent Dropdown: Function: closeDropdown (Purple - Function Definitions) */}
              <div style={{ borderBottom: '1px solid rgb(243, 243, 243)', color:'white', backgroundColor: '#6f42c1' }} className="button-comp purple" onClick={() => toggleVisibility('closeDropdown')}>
                Function: closeDropdown
              </div>
              {visibility.closeDropdown && (
                <div className="code-block">
                  {/* "If activeDropdown is not null" treated as a parent with its own toggle */}
                  <div style={{ backgroundColor: '#fd7e14' }} className="button-comp orange" onClick={() => toggleVisibility('nestedCloseDropdownIf')}>
                    If activeDropdown is not null
                  </div>
                  {visibility.nestedCloseDropdownIf && (
                    <div className="code-block">
                      <div className="code-line orange">Get dropdown element by id `dropdown-$ activeDropdown`</div>
                      <div className="code-line red">Remove "active" class from dropdown element</div>
                      <div className="code-line blue">Set activeDropdown to null</div>
                    </div>
                  )}
                </div>
              )}

              {/* Parent Dropdown: Function: toggleDropdown (Purple - Function Definitions) */}
              <div style={{ borderBottom: '1px solid rgb(243, 243, 243)', color:'white', backgroundColor: '#6f42c1' }} className="button-comp purple" onClick={() => toggleVisibility('toggleDropdown')}>
                Function: toggleDropdown
              </div>
              {visibility.toggleDropdown && (
                <div className="code-block">
                  <div className="code-line orange">Prevent default action of event</div>
                  <div className="code-line orange">Get dropdown element by id `dropdown-$ index`</div>
                  {/* Treat "If activeDropdown is equal to index" as a parent with its own toggle */}
                  <div style={{ backgroundColor: '#fd7e14' }} className="button-comp orange" onClick={() => toggleVisibility('nestedToggleDropdownIf')}>
                    If activeDropdown is equal to index
                  </div>
                  {visibility.nestedToggleDropdownIf && (
                    <div className="code-block">
                      <div className="code-line red">Call closeDropdown function</div>
                    </div>
                  )}
                  {/* Treat "Else" as a parent with its own toggle */}
                  <div style={{ backgroundColor: '#fd7e14' }} className="button-comp orange" onClick={() => toggleVisibility('nestedToggleDropdownElse')}>
                    Else
                  </div>
                  {visibility.nestedToggleDropdownElse && (
                    <div className="code-block">
                      {/* Nested: If activeDropdown is not null */}
                      <div style={{ backgroundColor: '#fd7e14' }} className="button-comp orange" onClick={() => toggleVisibility('nestedAddEventListener')}>
                        If activeDropdown is not null
                      </div>
                      {visibility.nestedAddEventListener && (
                        <div className="code-block">
                          <div className="code-line red">Call closeDropdown function</div>
                        </div>
                      )}
                      <div className="code-line red">Add "active" class to dropdown element</div>
                      <div className="code-line blue">Set activeDropdown to index</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Color Coding Explanation */}
      <div className="color-coding-explanation">
        <h3 className='small-subtitle'>Color Coding Guide</h3>
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
