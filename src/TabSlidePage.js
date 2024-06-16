import React from 'react';
import ButtonBox from './ButtonBox';
import './App.css';
import TabUIElementTwo from './TabUIElementTwo';
import TabUIElementOne from './TabUIElementOne';

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
            <TabUIElementOne />
          </ButtonBox>
        </div>
      </div>
    </div>
  );
};

export default TabSlidePage;
