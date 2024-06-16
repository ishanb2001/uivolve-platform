import React from 'react';
import ButtonBox from './ButtonBox';
import './App.css';
import AvatarCircles from './ThreeAvatar';
import AvatarWithStatus from './AvatarWithStatus';

const NavbarSnippets = () => {
  return (
    <div>
      <div className="flex-container">
        <div className="comp-card">
          <ButtonBox>
            <AvatarWithStatus />
          </ButtonBox>
        </div>
      </div>

      <div className="flex-container">
        <div className="comp-card">
          <ButtonBox>
            <AvatarCircles />
          </ButtonBox>
        </div>
      </div>

      <button>hi</button>
    </div>
  );
};

export default NavbarSnippets;
