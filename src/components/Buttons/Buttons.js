import React, { useState } from 'react';
import ButtonBox from '../../ButtonBox';
import './ButtonLibrary.module.css';
import TabUIElementOne from '../../TabUIElementOne';

const Buttons = () => {
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

  return (
    <div className="buttons-container">
      <div className="flex-container">
        <div className='comp-card'>
          <ButtonBox popupContent={
            <div>
              <TabUIElementOne tabs={tabs} defaultActiveTab={activeTab} setActiveTab={setActiveTab} />
              {FirstButton()}
            </div>
          }>
            <button className='button bg-purple button-arrow-slide'>
              <span>Arrow Slide Slide</span>
            </button>
          </ButtonBox>
        </div>
        <div className='comp-card'>
          <ButtonBox popupContent={
            <div>
            <TabUIElementOne tabs={tabs} defaultActiveTab={activeTab} setActiveTab={setActiveTab} />
            {SecondButton()}
          </div>
          }>
            <button className='button bg-purple test shadow-black'><span>Learn More</span></button>
          </ButtonBox>
        </div>
        <div className='comp-card'>
          <ButtonBox popupContent={
            <div>
            <TabUIElementOne tabs={tabs} defaultActiveTab={activeTab} setActiveTab={setActiveTab} />
            {ThirdButton()}
          </div>
          }>
            <button className='button bg-red lift-effect'>Learn More</button>
          </ButtonBox>
        </div>
      </div>
      <div className="flex-container">
        <div className='comp-card'>
          <ButtonBox popupContent={
            <div>
              <TabUIElementOne tabs={tabs} defaultActiveTab={activeTab} setActiveTab={setActiveTab} />
              {FirstButton()}
            </div>
          }>
            <button class="button hover-circle green bg-purple">
        <span>Retro Red</span>
      </button>
          </ButtonBox>
        </div>
        <div className='comp-card'>
          <ButtonBox popupContent={
            <div>
            <TabUIElementOne tabs={tabs} defaultActiveTab={activeTab} setActiveTab={setActiveTab} />
            {SecondButton()}
          </div>
          }>
            <button className='button bg-purple scale-up hover-circle red'><span>Learn More</span></button>
          </ButtonBox>
        </div>
        <div className='comp-card'>
          <ButtonBox popupContent={
            <div>
            <TabUIElementOne tabs={tabs} defaultActiveTab={activeTab} setActiveTab={setActiveTab} />
            {ThirdButton()}
          </div>
          }>
            <button className='button border-grey'>Learn More</button>
          </ButtonBox>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
