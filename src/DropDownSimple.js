import React, { useState, useEffect } from 'react';

const DropdownSimple = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown !== null && !event.target.closest('.nav')) {
        closeDropdown();
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const toggleDropdown = (event, index) => {
    event.preventDefault();
    if (activeDropdown === index) {
      closeDropdown();
    } else {
      setActiveDropdown(index);
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const navStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  };

  const navItemStyle = {
    position: 'relative',
  };

  const navLinkStyle = {
    textDecoration: 'none',
    padding: '10px 20px',
    display: 'block',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
  };

  const dropdownMenuStyle = {
    display: activeDropdown === 0 ? 'block' : 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    minWidth: '200px',
    zIndex: 1,
    fontSize: '16px',
    textAlign: 'left',
  };

  const dropdownLinkStyle = {
    padding: '10px',
    display: 'block',
    textDecoration: 'none',
    color: 'black',
  };

  const dropdownLinkHoverStyle = {
    backgroundColor: '#f1f1f1',
  };

  const paragraphStyle = {
    margin: 0,
    fontSize: '14px',
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      <ul style={navStyle} className="nav">
        <li style={navItemStyle}>
          <a
            href="#"
            style={navLinkStyle}
            onClick={(event) => toggleDropdown(event, 0)}
          >
            Dropdown
          </a>
          <div style={dropdownMenuStyle}>
            <a
              href="#"
              style={dropdownLinkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f1f1')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Menu 1-1
              <p style={paragraphStyle}>
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </a>
            <a
              href="#"
              style={dropdownLinkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f1f1')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Menu 1-2
              <p style={paragraphStyle}>
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </a>
            <a
              href="#"
              style={dropdownLinkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f1f1')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Menu 1-3
              <p style={paragraphStyle}>
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropdownSimple;
