import React from 'react';
import ButtonBox from './ButtonBox';
import './App.css';
import TabUIElementTwo from './TabUIElementTwo';
import TabUIElementOne from './TabUIElementOne';
import DropDownSimple from './DropDownSimple';

const tabs = ["Screens", "UI Elements", "Flows"];

const toggleVisibility = (event) => {
  const nextElement = event.target.nextElementSibling;
  if (nextElement.style.display === 'none') {
    nextElement.style.display = 'block';
  } else {
    nextElement.style.display = 'none';
  }
};

const TabSlidePage = () => {
  return (
    <div>
      <div className="flex-container">
        <div className="comp-card">
          <ButtonBox>
            <TabUIElementTwo />
          </ButtonBox>
        </div>
      </div>

      <h2>Pseudo Code Logic Visualizer</h2>
      <div className="code-container">
        <div className="code-block-wrapper">
          <div className="button border-grey" onClick={toggleVisibility}>Initialize State</div>
          <div className="code-block" style={{ display: 'none' }}>
            <div className="button bg-purple">Initialize activeTab to 0</div>
          </div>

          <div className="button border-grey" onClick={toggleVisibility}>Create Reference</div>
          <div className="code-block" style={{ display: 'none' }}>
            <div className="button bg-purple">Create indicatorRef using useRef</div>
          </div>

          <div className="button border-grey" onClick={toggleVisibility}>Effect Hook</div>
          <div className="code-block" style={{ display: 'none' }}>
            <div className="button bg-green">Use useEffect to update indicator</div>
            <div className="code-block">
              <div className="code-line orange">On activeTab change or window resize</div>
              <div className="code-block">
                <div className="code-line red">Get active tab element</div>
                <div className="code-line red">Update indicator width and position</div>
              </div>
            </div>
          </div>

          <div className="button border-grey" onClick={toggleVisibility}>Function: handleTabClick</div>
          <div className="code-block" style={{ display: 'none' }}>
            <div className="code-line orange">Set activeTab to clicked tab index</div>
          </div>

          <div className="button border-grey" onClick={toggleVisibility}>Render Component</div>
          <div className="code-block" style={{ display: 'none' }}>
            <div className="button bg-green">Map through tabs array</div>
            <div className="code-block">
              <div className="code-line red">Render button for each tab</div>
              <div className="code-block">
                <div className="code-line orange">On click, call handleTabClick</div>
                <div className="code-line blue">Apply active class if tab index matches activeTab</div>
              </div>
            </div>
            <div className="code-line red">Render indicator div</div>
          </div>
        </div>

        <h3>Explanation of Color Coding:</h3>
        <ul>
          <li><span className="blue">Blue</span>: Used for variable initialization and resetting.</li>
          <li><span className="green">Green</span>: Used for event handling and timers.</li>
          <li><span className="orange">Orange</span>: Used for conditions and checks.</li>
          <li><span className="red">Red</span>: Used for function calls and class manipulations.</li>
          <li><span className="purple">Purple</span>: Used for labeling function definitions.</li>
        </ul>
      </div>

      <div className="flex-container">
        <div className="comp-card">
          <ButtonBox>
            <TabUIElementOne tabs={tabs} defaultActiveTab={2} />
          </ButtonBox>
        </div>
      </div>
    </div>
  );
};

export default TabSlidePage;
