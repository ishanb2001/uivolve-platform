import React, { useState } from 'react';

const ExpandingButton = ({ marginLeft = '0px', bgColor = 'black' }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount((prevCount) => (prevCount + 1) % 3);
  };

  const handleCloseClick = () => {
    setClickCount(0);
  };

  const getButtonStyle = () => {
    if (clickCount === 1) return { ...styles.button, ...styles.buttonClicked, backgroundColor: bgColor };
    if (clickCount === 2) return { ...styles.button, ...styles.buttonClickedMore, backgroundColor: bgColor };
    return { ...styles.button, backgroundColor: bgColor };
  };

  return (
    <div style={{ ...styles.container, marginLeft }}>
      <button 
        style={getButtonStyle()} 
        onClick={handleButtonClick}
      ></button>
      {(clickCount === 1 || clickCount === 2) && (
        <div style={styles.overlay}>
          
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    margin: '20px 0',
  },
  button: {
    width: '180px',
    height: '30px',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    transition: 'width 0.5s ease, height 0.5s ease, all 0.5s ease',
    zIndex: 1,
  },
  buttonClicked: {
    width: '500px',
    height: '300px',
    borderRadius: '40px',
  },
  buttonClickedMore: {
    width: '700px',
    height: '300px',
    borderRadius: '40px',
  },
  overlay: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  content: {
    width: '0',
    height: '0',
    backgroundColor: 'black',
    color: 'white',
    overflow: 'hidden',
    borderRadius: '10px',
    opacity: 0,
    transition: 'width 0.5s ease, height 0.5s ease, opacity 0.5s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentVisible: {
    width: '800px',
    height: '150px',
    opacity: 1,
    padding: '20px',
    borderRadius: '5px',
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'red',
    border: 'none',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '20px',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default ExpandingButton;
