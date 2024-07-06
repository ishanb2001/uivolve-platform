import React from 'react';
import ButtonBox from './ButtonBox';
import './App.css';
import TabUIElementTwo from './TabUIElementTwo';
import TabUIElementOne from './TabUIElementOne';

const tabs = ["Screens", "UI Elements", "Flows"];

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
