import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DropDownPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDropdownEnabled, setIsDropdownEnabled] = useState(false);
  const [showPseudoCode, setShowPseudoCode] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [loopImages, setLoopImages] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://via.placeholder.com/150/0000FF/808080?text=Image+1',
    'https://via.placeholder.com/150/FF0000/FFFFFF?text=Image+2',
    'https://via.placeholder.com/150/00FF00/000000?text=Image+3',
  ];

  const handleButtonClick = () => {
    if (isDropdownEnabled) {
      setShowDropdown((prevShowDropdown) => !prevShowDropdown);
    }
    if (loopImages) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const toggleDropdownFunctionality = () => {
    setIsDropdownEnabled((prevIsDropdownEnabled) => !prevIsDropdownEnabled);
    setShowDropdown(false); // Ensure dropdown is closed when toggling functionality
  };

  const toggleCodeView = () => {
    setShowPseudoCode((prevShowPseudoCode) => !prevShowPseudoCode);
  };

  const addImage = () => {
    setShowImage(true);
  };

  const toggleImageLoop = () => {
    setLoopImages((prevLoopImages) => !prevLoopImages);
  };

  const generateCodePreview = () => {
    if (showPseudoCode) {
      return `
        // Select the button element
        let button = document.querySelector('.button');
        ${isDropdownEnabled ? `
        // Add click event listener to button
        on button click:
          toggle dropdown visibility
        ` : `
        // Dropdown functionality is disabled
        `}
        ${showImage ? `
        // Display an image
        let image = document.querySelector('.image');
        ${loopImages ? `
        // Loop through multiple images
        on button click:
          change image source
        ` : `
        // Single image displayed
        `}
        ` : `
        // No image displayed
        `}
      `;
    } else {
      return `
        const button = document.querySelector('.button');
        ${isDropdownEnabled ? `
        button.addEventListener('click', () => {
          const dropdown = document.querySelector('.dropdown-menu');
          dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
        ` : `
        // Dropdown functionality is disabled
        `}
        ${showImage ? `
        const image = document.querySelector('.image');
        ${loopImages ? `
        let currentIndex = 0;
        const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
        button.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % images.length;
          image.src = images[currentIndex];
        });
        ` : `
        // Single image displayed
        `}
        ` : `
        // No image displayed
        `}
      `;
    }
  };

  return (
    <div>
      <h1 style={{ marginBottom: 20 }}>Interactive Learning Platform</h1>
      <p style={{ marginBottom: 30, fontSize: 20, lineHeight: '2rem' }}>
        Learn JavaScript and UI creation interactively.
      </p>
      
      {/* Button with styling */}
      <button className="button" onClick={handleButtonClick} style={styles.button}>
        Click Me
      </button>

      {/* Dropdown menu */}
      {showDropdown && (
        <div style={styles.dropdownMenu}>
          <a href="#" style={styles.dropdownItem}>Option 1</a>
          <a href="#" style={styles.dropdownItem}>Option 2</a>
          <a href="#" style={styles.dropdownItem}>Option 3</a>
        </div>
      )}

      {/* Toggle Dropdown Functionality Button */}
      <button
        className="button"
        onClick={toggleDropdownFunctionality}
        style={{ ...styles.button, marginTop: '20px' }}
      >
        {isDropdownEnabled ? 'Remove Dropdown' : 'Add Dropdown'}
      </button>

      {/* Toggle Code View Button */}
      <button
        className="button"
        onClick={toggleCodeView}
        style={{ ...styles.button, marginTop: '20px' }}
      >
        {showPseudoCode ? 'Show Actual Code' : 'Show Pseudo-Code'}
      </button>

      {/* Add Image Button */}
      <button
        className="button"
        onClick={addImage}
        style={{ ...styles.button, marginTop: '20px' }}
      >
        Add Image
      </button>

      {/* Image Display */}
      {showImage && (
        <div>
          <img
            className="image"
            src={images[currentImageIndex]}
            alt="Placeholder"
            style={styles.image}
          />
          <button
            className="button"
            onClick={toggleImageLoop}
            style={{ ...styles.button, marginTop: '20px' }}
          >
            {loopImages ? 'Stop Image Loop' : 'Loop Images'}
          </button>
        </div>
      )}

      {/* JavaScript Code Preview */}
      <div style={styles.codePreview}>
        <SyntaxHighlighter language="javascript" style={solarizedlight}>
          {generateCodePreview()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    border: '1px solid transparent',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '10px',
    transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    margin: '0px',
    fontFamily: '"Inter", sans-serif',
    color: '#fff',
    backgroundColor: '#0e74f6', // Blue background
  },
  dropdownMenu: {
    position: 'absolute',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '10px',
    padding: '10px',
  },
  dropdownItem: {
    padding: '10px',
    textDecoration: 'none',
    color: '#333',
    display: 'block',
    transition: 'background-color 0.3s',
  },
  image: {
    display: 'block',
    marginTop: '20px',
    borderRadius: '5px',
  },
  codePreview: {
    marginTop: '30px',
    padding: '10px',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
  },
};

export default DropDownPage;
