import React from 'react';
import './Block.css';
import Step from './Step';
import ToggleStep from './ToggleStep';

const FunctionLayout = ({ functionName, steps }) => {
  return (
    <div className="container-custom">
      <div className="function-title-custom button">{functionName}</div>
      <div className='function-elements'>
        {steps.map((step, index) =>
          step.nestedSteps ? (
            <ToggleStep key={index} text={step.text} nestedSteps={step.nestedSteps} />
          ) : (
            <Step key={index} text={step.text} />
          )
        )}
      </div>
      <div className="end-function-custom button">End Function</div>
    </div>
  );
};

export default FunctionLayout;
