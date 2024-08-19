import ButtonBox from './ButtonBox';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import DropdownMenu from './HoverMenu';
import DropdownSimple from './DropDownSimple';
import TabUIElementOne from './TabUIElementOne';

const DropDownPage = () => {
  const tabs = ["HTML", "CSS"];

  const [activeTab, setActiveTab] = useState(0);

  const FirstButton = () => {
    if (activeTab === 0) {
      return (
        <pre className="code">
          <code>
            &lt;button className='button bg-purple button-arrow-slide'&gt;<br />
            &nbsp;&nbsp;&lt;span&gt;Arrow Slide Slide&lt;/span&gt;<br />
            &lt;/button&gt;
          </code>
        </pre>
      );
    } else if (activeTab === 1) {
      return (
        <pre className="code">
          <code>
            .button &#123;<br />
            &nbsp;&nbsp;padding: 10px 20px;<br />
            &nbsp;&nbsp;border: 1px solid transparent;<br />
            &nbsp;&nbsp;font-size: 16px;<br />
            &nbsp;&nbsp;cursor: pointer;<br />
            &nbsp;&nbsp;border-radius: 10px;<br />
            &nbsp;&nbsp;transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;<br />
            &nbsp;&nbsp;overflow: hidden;<br />
            &nbsp;&nbsp;white-space: nowrap;<br />
            &nbsp;&nbsp;margin: 5px;<br />
            &nbsp;&nbsp;font-family: "Inter", sans-serif;<br />
            &nbsp;&nbsp;color: #333;<br />
            &nbsp;&nbsp;background-color: rgb(228, 228, 228);<br />
            &#125;<br />
            .button.bg-purple &#123;<br />
            &nbsp;&nbsp;background-color: #6d37ff;<br />
            &nbsp;&nbsp;color: white;<br />
            &#125;<br />
            .button.bg-purple:hover &#123;<br />
            &nbsp;&nbsp;background-color: #5c30e5;<br />
            &#125;<br />
            .button.bg-purple:active &#123;<br />
            &nbsp;&nbsp;background-color: #7e4fff;<br />
            &#125;
          </code>
        </pre>
      );
    }
  };

  const SecondButton = () => {
    if (activeTab === 0) {
      return (
        <pre className="code">
          <code>
            &lt;button className='button bg-purple test shadow-black'&gt;<br />
            &nbsp;&nbsp;&lt;span&gt;Learn More&lt;/span&gt;<br />
            &lt;/button&gt;
          </code>
        </pre>
      );
    } else if (activeTab === 1) {
      return (
        <pre className="code">
          <code>
            .button &#123;<br />
            &nbsp;&nbsp;padding: 10px 20px;<br />
            &nbsp;&nbsp;border: 1px solid transparent;<br />
            &nbsp;&nbsp;font-size: 16px;<br />
            &nbsp;&nbsp;cursor: pointer;<br />
            &nbsp;&nbsp;border-radius: 10px;<br />
            &nbsp;&nbsp;transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;<br />
            &nbsp;&nbsp;overflow: hidden;<br />
            &nbsp;&nbsp;white-space: nowrap;<br />
            &nbsp;&nbsp;margin: 5px;<br />
            &nbsp;&nbsp;font-family: "Inter", sans-serif;<br />
            &nbsp;&nbsp;color: #333;<br />
            &nbsp;&nbsp;background-color: rgb(228, 228, 228);<br />
            &#125;<br />
            .button.bg-purple &#123;<br />
            &nbsp;&nbsp;background-color: #6d37ff;<br />
            &nbsp;&nbsp;color: white;<br />
            &#125;<br />
            .button.bg-purple:hover &#123;<br />
            &nbsp;&nbsp;background-color: #5c30e5;<br />
            &#125;<br />
            .button.bg-purple:active &#123;<br />
            &nbsp;&nbsp;background-color: #7e4fff;<br />
            &#125;<br />
            .test &#123;<br />
            &nbsp;&nbsp;transition: box-shadow 0.3s ease;<br />
            &nbsp;&nbsp;box-shadow: 0px 0px 0 0 var(--btn-color);<br />
            &nbsp;&nbsp;position: relative;<br />
            &#125;<br />
            .test.shadow-black &#123;<br />
            &nbsp;&nbsp;--btn-color: black;<br />
            &#125;
          </code>
        </pre>
      );
    }
  };

  const ThirdButton = () => {
    if (activeTab === 0) {
      return (
        <pre className="code">
          <code>
            &lt;button className='button bg-red lift-effect'&gt;Learn More&lt;/button&gt;
          </code>
        </pre>
      );
    } else if (activeTab === 1) {
      return (
        <pre className="code">
          <code>
            .button &#123;<br />
            &nbsp;&nbsp;padding: 10px 20px;<br />
            &nbsp;&nbsp;border: 1px solid transparent;<br />
            &nbsp;&nbsp;font-size: 16px;<br />
            &nbsp;&nbsp;cursor: pointer;<br />
            &nbsp;&nbsp;border-radius: 10px;<br />
            &nbsp;&nbsp;transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;<br />
            &nbsp;&nbsp;overflow: hidden;<br />
            &nbsp;&nbsp;white-space: nowrap;<br />
            &nbsp;&nbsp;margin: 5px;<br />
            &nbsp;&nbsp;font-family: "Inter", sans-serif;<br />
            &nbsp;&nbsp;color: #333;<br />
            &nbsp;&nbsp;background-color: rgb(228, 228, 228);<br />
            &#125;<br />
            .button.bg-red &#123;<br />
            &nbsp;&nbsp;background-color: #ff6382;<br />
            &nbsp;&nbsp;color: white;<br />
            &#125;<br />
            .button.bg-red:hover &#123;<br />
            &nbsp;&nbsp;background-color: #e55574;<br />
            &#125;<br />
            .button.bg-red:active &#123;<br />
            &nbsp;&nbsp;background-color: #ff8095;<br />
            &#125;<br />
            .lift-effect &#123;<br />
            &nbsp;&nbsp;transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;<br />
            &#125;<br />
            .lift-effect:hover &#123;<br />
            &nbsp;&nbsp;transform: translateY(-5px);<br />
            &#125;
          </code>
        </pre>
      );
    }
  };
  const toggleVisibility = (event) => {
    const nextElement = event.target.nextElementSibling;
    if (nextElement.style.display === 'none') {
      nextElement.style.display = 'block';
    } else {
      nextElement.style.display = 'none';
    }
  };

  return (
    <div>
      <h1 style={{marginBottom: 20}}>Dropdown Menu</h1>
      <p style={{marginBottom: 30}}>We are dedicated to empowering developers and designers by providing a comprehensive, modern, and trendy library of frontend UI code snippets and detailed documentation.</p>
      <div className="flex-container">
        <div className="comp-card">
          
          <ButtonBox popupContent={
            <div>
              <TabUIElementOne tabs={tabs} defaultActiveTab={activeTab} setActiveTab={setActiveTab} />
              {FirstButton()}
            </div>
          }>
            
            <DropdownSimple />
          </ButtonBox>
        </div>
      </div>
      <div style={{marginBottom: 20, marginTop: 30}} className="psudo-area-outer">
      <div className="psudo-area">
      <h2 style={{marginBottom: 20, marginTop: 30, textAlign: 'center'}} className="subtitle">Pseudo Code with Color Coding and Labels</h2>
      <p style={{marginBottom: 30, textAlign: 'center'}}>We are dedicated to empowering developers and designers by providing a comprehensive, modern, and trendy library of frontend UI code snippets and detailed documentation.</p>
      <div className="code-container">
        <div style={{border: '1px solid rgb(243, 243, 243)', borderRadius: 10}} className="code-block-wrapper">
          <div style={{borderBottom: '1px solid rgb(243, 243, 243)'}} className="button-comp" onClick={toggleVisibility}>Initialize Variables</div>
          <div className="code-block" style={{ display: 'none' }}>
            <div className="code-line blue">Initialize activeDropdown to null</div>
          </div>
          <div style={{borderBottom: '1px solid rgb(243, 243, 243)'}} className="button-comp" onClick={toggleVisibility}>Add Event Listener</div>
          <div className="code-block" style={{ display: 'none' }}>
            <div className="code-line blue">On document click event</div>
            <div className="code-block">
              <div className="code-line orange">If activeDropdown is not null and click is outside of .nav element</div>
              <div className="code-block">
                <div className="code-line red">Call closeDropdown function</div>
              </div>
            </div>
          </div>
          <div style={{borderBottom: '1px solid rgb(243, 243, 243)'}} className="button-comp" onClick={toggleVisibility}>Function: closeDropdown</div>
          <div className="code-block" style={{ display: 'none' }}>
            <div className="code-line orange">If activeDropdown is not null</div>
            <div className="code-block">
              <div className="code-line orange">Get dropdown element by id `dropdown-$ activeDropdown`</div>
              <div className="code-line red">Remove "active" class from dropdown element</div>
              <div className="code-line blue">Set activeDropdown to null</div>
            </div>
          </div>
          <div style={{borderBottom: '1px solid rgb(243, 243, 243)'}} className="button-comp" onClick={toggleVisibility}>Function: toggleDropdown</div>
          <div className="code-block" style={{ display: 'none' }}>
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
      </div>
      </div>

      <div class="color-coding-explanation">
  <h3 className='small-subtitle'>Color Coding Guide</h3>
  <ul>
    <li><span class="color-code blue"></span> <strong>Blue</strong>: Variable initialization and resetting.</li>
    <li><span class="color-code green"></span> <strong>Green</strong>: Event handling and timers.</li>
    <li><span class="color-code orange"></span> <strong>Orange</strong>: Conditions and checks.</li>
    <li><span class="color-code red"></span> <strong>Red</strong>: Function calls and class manipulations.</li>
    <li><span class="color-code purple"></span> <strong>Purple</strong>: Labeling function definitions.</li>
  </ul>
</div>

    </div>
  );
};

export default DropDownPage;
