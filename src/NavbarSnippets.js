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


const NavbarSnippets = () => {

    

  return (
    <div>
      
        
        <HoverMenu/>
    <div class="flex-container">
        <div className='comp-card'><ButtonBox/>
        <TabUIElementTwo/>
       
        </div>

  </div>

<div class="flex-container">
<div className='comp-card'><ButtonBox/>
<TabUIElementOne/>

      
</div>
</div>

<div class="flex-container">
<div className='comp-card'><ButtonBox/>
<AvatarCircles/>

      
</div>
</div>

<div class="flex-container">
<div className='comp-card'><ButtonBox/>
<AvatarWithStatus/>

      
</div>
</div>

<div class="flex-container">
<div className='comp-card'><ButtonBox/>
<DropdownMenu/>
<DropdownMenu/>

      
</div>
</div>

</div>
  );
};

export default NavbarSnippets;
