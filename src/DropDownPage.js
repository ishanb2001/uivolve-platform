import React, { useState } from 'react';
import './App.css'; // Assuming App.css contains relevant styling
import ButtonBox from './ButtonBox';
import './App.css';
import DropdownMenu from './HoverMenu';
import DropdownSimple from './DropDownSimple';
import TabUIElementOne from './TabUIElementOne';

const DropDownPage = () => {
  const tabs = ["HTML", "CSS"];
  const [activeTab, setActiveTab] = useState(0);
  
  const [activeDropdown, setActiveDropdown] = useState(null); // To manage the active dropdown index
  const [collapsed, setCollapsed] = useState({}); // To manage collapsed/expanded state of tree nodes

  // Toggles the collapsed state of a specific tree node
  const toggleCollapse = (key) => {
    setCollapsed((prevCollapsed) => ({
      ...prevCollapsed,
      [key]: !prevCollapsed[key],
    }));
  };

  // Toggles the dropdown
  const toggleDropdown = (event, index) => {
    event.preventDefault();
    if (activeDropdown === index) {
      setActiveDropdown(null); // Close the current dropdown
    } else {
      setActiveDropdown(index); // Open a new dropdown
    }
  };

  return (
    <div>
      <h1 style={{ marginBottom: 20 }}>Dropdown Menu</h1>
      <p style={{ marginBottom: 30 }}>
        We are dedicated to empowering developers and designers by providing a
        comprehensive, modern, and trendy library of frontend UI code snippets
        and detailed documentation.
      </p>
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
      <div className="tree">
        <ul>
          <li>
            <span
              className="initialize"
              onClick={() => toggleCollapse('initializeVariables')}
            >
              Initialize activeDropdown to null
              <span className={`arrow ${collapsed.initializeVariables ? 'expanded' : ''}`}>
                &#9654;
              </span>
            </span>
            {collapsed.initializeVariables && (
              <ul>
                <li>
                  <span
                    className="event"
                    onClick={() => toggleCollapse('addEventListener')}
                  >
                    On document click event
                    <span className={`arrow ${collapsed.addEventListener ? 'expanded' : ''}`}>
                      &#9654;
                    </span>
                  </span>
                  {collapsed.addEventListener && (
                    <ul>
                      <li>
                        <span
                          className="condition"
                          onClick={() => toggleCollapse('nestedAddEventListener')}
                        >
                          If activeDropdown is not null and click is outside of
                          .nav element
                          <span className={`arrow ${collapsed.nestedAddEventListener ? 'expanded' : ''}`}>
                            &#9654;
                          </span>
                        </span>
                        {collapsed.nestedAddEventListener && (
                          <ul>
                            <li>
                              <span className="function">
                                Call closeDropdown function
                              </span>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <span
                    className="function"
                    onClick={() => toggleCollapse('toggleDropdown')}
                  >
                    Function: toggleDropdown
                    <span className={`arrow ${collapsed.toggleDropdown ? 'expanded' : ''}`}>
                      &#9654;
                    </span>
                  </span>
                  {collapsed.toggleDropdown && (
                    <ul>
                      <li>
                        <span className="action">Prevent default action of event</span>
                      </li>
                      <li>
                        <span className="action">Get dropdown element by id 'dropdown-${'{index}'}</span>
                      </li>
                      <li>
                        <span
                          className="condition"
                          onClick={() => toggleCollapse('nestedToggleDropdownIf')}
                        >
                          If activeDropdown is equal to index
                          <span className={`arrow ${collapsed.nestedToggleDropdownIf ? 'expanded' : ''}`}>
                            &#9654;
                          </span>
                        </span>
                        {collapsed.nestedToggleDropdownIf && (
                          <ul>
                            <li>
                              <span className="function">
                                Call closeDropdown function
                              </span>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <span
                          className="condition"
                          onClick={() => toggleCollapse('nestedToggleDropdownElse')}
                        >
                          Else
                          <span className={`arrow ${collapsed.nestedToggleDropdownElse ? 'expanded' : ''}`}>
                            &#9654;
                          </span>
                        </span>
                        {collapsed.nestedToggleDropdownElse && (
                          <ul>
                            <li>
                              <span
                                className="condition"
                                onClick={() => toggleCollapse('nestedAddEventListenerLast')}
                              >
                                If activeDropdown is not null
                                <span className={`arrow ${collapsed.nestedAddEventListenerLast ? 'expanded' : ''}`}>
                                  &#9654;
                                </span>
                              </span>
                              {collapsed.nestedAddEventListenerLast && (
                                <ul>
                                  <li>
                                    <span className="function">
                                      Call closeDropdown function
                                    </span>
                                  </li>
                                </ul>
                              )}
                            </li>
                            <li>
                              <span className="action">
                                Add "active" class to dropdown element
                              </span>
                            </li>
                            <li>
                              <span className="action">
                                Set activeDropdown to index
                              </span>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Pseudo Code Section */}
      <div style={{ marginBottom: 20, marginTop: 30 }} className="psudo-area-outer">
        <div className="psudo-area">
          <h2 style={{ marginBottom: 20, marginTop: 30, textAlign: 'center' }} className="subtitle">
            Pseudo Code with Color Coding and Labels
          </h2>
          <p style={{ marginBottom: 30, textAlign: 'center' }}>
            We are dedicated to empowering developers and designers by providing a
            comprehensive, modern, and trendy library of frontend UI code snippets
            and detailed documentation.
          </p>
          {/* Add your content here */}
        </div>
      </div>

      {/* Color Coding Explanation */}
      <div className="color-coding-explanation">
        <h3 className="small-subtitle">Color Coding Guide</h3>
        <ul>
          <li>
            <span className="color-code blue"></span> <strong>Blue</strong>: Variable initialization and resetting.
          </li>
          <li>
            <span className="color-code green"></span> <strong>Green</strong>: Event handling and timers.
          </li>
          <li>
            <span className="color-code orange"></span> <strong>Orange</strong>: Conditions and checks.
          </li>
          <li>
            <span className="color-code red"></span> <strong>Red</strong>: Function calls and class manipulations.
          </li>
          <li>
            <span className="color-code purple"></span> <strong>Purple</strong>: Labeling function definitions.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownPage;
