import React from 'react';
import ButtonBox from './ButtonBox';
import './App.css';

const NavbarSnippets = () => {


  return (
    <div>
    <div class="flex-container">
        <div className='comp-card'><ButtonBox/>
        <button className='button bg-purple'>Learn More</button>
        </div>

  </div>

<div class="flex-container">
<div className='comp-card'><ButtonBox/>
<button class="button bg-purple button-arrow-slide">
        <span>Arrow Slide Slide</span>
      </button>
</div>
</div>
</div>
  );
};

export default NavbarSnippets;
