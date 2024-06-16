import ButtonBox from './ButtonBox';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import TabUIElementTwo from './TabUIElementTwo'
import TabUIElementOne from './TabUIElementOne';
import AvatarCircles from './ThreeAvatar';
import AvatarWithStatus from './AvatarWithStatus';
import Checkboxes from './Checkboxes';
import HoverMenu from './HoverMenu';
import DropdownMenu from './HoverMenu';


const DropDownPage = () => {
    return (
      <div>
        <div className="flex-container">
          <div className="comp-card">
            <ButtonBox>
              <DropdownMenu />
            </ButtonBox>
          </div>
        </div>
      </div>
    );
  };
  
  export default DropDownPage;