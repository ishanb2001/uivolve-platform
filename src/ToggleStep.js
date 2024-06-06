import React, { useState } from 'react';
import './Block.css'; 

const ToggleStep = ({ options, text }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div>
            {text && (
                <div className="step-custom button border-grey" onClick={toggleDropdown}>
                    {text} &#9662;
                </div>
            )}
            <div className={`dropdown-content-custom ${isDropdownVisible ? 'visible' : 'hidden'}`}>
                {options.map((option, index) => (
                    <div key={index} style={{ marginLeft: option.marginLeft }}>
                        <div className="nested-step-custom button border-grey">
                            {option.text}
                        </div>
                        {option.subOptions && option.subOptions.length > 0 && (
                            <ToggleStep options={option.subOptions} text={option.text} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToggleStep;
