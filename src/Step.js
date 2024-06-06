import React from 'react';
import './Block.css';

const Step = ({ text }) => {
  return <div className="step-custom button border-grey">{text}</div>;
};

export default Step;
