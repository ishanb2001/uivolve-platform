import React, { useState } from 'react';
import ButtonBox from './ButtonBox';
import './App.css';
import TabUIElementOne from './TabUIElementOne';

const Buttons = () => {
  const tabs = ["HTML", "CSS"];
  const [activeTab, setActiveTab] = useState(0);

  const FirstButton = () => {
    if (activeTab === 0) {
      return (
        <pre className="code">

        <span className="keyword">import</span> <span className="class">React</span> <span className="keyword">from</span> <span className="string">'react'</span>;<br />
        <span className="keyword">import</span> {'{'} <span className="class">Flex</span>, <span className="class">Radio</span> {'}'} <span className="keyword">from</span> <span className="string">'antd'</span>;<br /><br />
        <span className="keyword">const</span> <span className="variable">baseStyle</span>: <span className="class">React.CSSProperties</span> = {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;width: <span className="string">'25%'</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;height: <span className="number">54</span>,<br />
        {'}'};
      </pre>
      );
    } else if (activeTab === 1) {
      return (
        <pre className="code">

        <span className="keyword">import</span> <span className="class">React</span> <span className="keyword">from</span> <span className="string">'react'</span>;<br />
        <span className="keyword">import</span> {'{'} <span className="class">Flex</span>, <span className="class">Radio</span> {'}'} <span className="keyword">from</span> <span className="string">'antd'</span>;<br /><br />
        <span className="keyword">const</span> <span className="variable">baseStyle</span>: <span className="class">React.CSSProperties</span> = {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;width: <span className="string">'25%'</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;height: <span className="number">54</span>,<br />
        {'}'};
      </pre>
      );
    }
  };

  const SecondButton = () => {
    if (activeTab === 0) {
      return (
        <pre className="code">

        <span className="keyword">hiimport</span> <span className="class">React</span> <span className="keyword">from</span> <span className="string">'react'</span>;<br />
        <span className="keyword">import</span> {'{'} <span className="class">Flex</span>, <span className="class">Radio</span> {'}'} <span className="keyword">from</span> <span className="string">'antd'</span>;<br /><br />
        <span className="keyword">const</span> <span className="variable">baseStyle</span>: <span className="class">React.CSSProperties</span> = {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;width: <span className="string">'25%'</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;height: <span className="number">54</span>,<br />
        {'}'};
      </pre>
      );
    } else if (activeTab === 1) {
      return (
        <pre className="code">

        <span className="keyword">import</span> <span className="class">React</span> <span className="keyword">from</span> <span className="string">'react'</span>;<br />
        <span className="keyword">import</span> {'{'} <span className="class">Flex</span>, <span className="class">Radio</span> {'}'} <span className="keyword">from</span> <span className="string">'antd'</span>;<br /><br />
        <span className="keyword">const</span> <span className="variable">baseStyle</span>: <span className="class">React.CSSProperties</span> = {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;width: <span className="string">'25%'</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;height: <span className="number">54</span>,<br />
        {'}'};
      </pre>
      );
    }
  };

  const ThirdButton = () => {
    if (activeTab === 0) {
      return (
        <pre className="code">

        <span className="keyword">hiimport</span> <span className="class">React</span> <span className="keyword">from</span> <span className="string">'react'</span>;<br />
        <span className="keyword">import</span> {'{'} <span className="class">Flex</span>, <span className="class">Radio</span> {'}'} <span className="keyword">from</span> <span className="string">'antd'</span>;<br /><br />
        <span className="keyword">const</span> <span className="variable">baseStyle</span>: <span className="class">React.CSSProperties</span> = {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;width: <span className="string">'25%'</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;height: <span className="number">54</span>,<br />
        {'}'};
      </pre>
      );
    } else if (activeTab === 1) {
      return (
        <pre className="code">

        <span className="keyword">importttttttt</span> <span className="class">React</span> <span className="keyword">from</span> <span className="string">'react'</span>;<br />
        <span className="keyword">import</span> {'{'} <span className="class">Flex</span>, <span className="class">Radio</span> {'}'} <span className="keyword">from</span> <span className="string">'antd'</span>;<br /><br />
        <span className="keyword">const</span> <span className="variable">baseStyle</span>: <span className="class">React.CSSProperties</span> = {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;width: <span className="string">'25%'</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;height: <span className="number">54</span>,<br />
        {'}'};
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
            <button className='button bg-purple test shadow-black'>Learn More</button>
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
    </div>
  );
};

export default Buttons;
