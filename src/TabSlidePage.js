import React, { useState, useEffect } from 'react';
import TabUIElementOne from './TabUIElementOne';
import logo from './images/uivolve-logo.png';

const WebPrototypeBuilder = () => {
  const [items, setItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('dragDrop');
  const [code, setCode] = useState(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* CSS goes here */
  </style>
</head>
<body>
  <!-- HTML goes here -->
  <script>
    // JavaScript goes here
  </script>
</body>
</html>
`);
  const [dropIndex, setDropIndex] = useState(null);
  const [isPreview, setIsPreview] = useState(false);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [isUndoRedo, setIsUndoRedo] = useState(false);

  const components = [
    { type: 'button', label: 'Button', icon: '⚡' },
    { type: 'text', label: 'Text Block', icon: '📝' },
    { type: 'navbar', label: 'Navigation Bar', icon: '🧭' },
    { type: 'image', label: 'Image', icon: '🖼️' },
    { type: 'footer', label: 'Footer', icon: '🔻' },
    { type: 'cta', label: 'CTA with Banner', icon: '📢' },
  ];

  const syntaxHighlight = (code, language) => {
    if (language === 'html') {
      return code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/(".*?")/g, '<span style="color: #ce9178;">$1</span>')
        .replace(/(&lt;\/?[a-z]+(&gt;)?)/g, '<span style="color: #569cd6;">$1</span>')
        .replace(/(class=)/g, '<span style="color: #9cdcfe;">$1</span>');
    } else if (language === 'css') {
      return code
        .replace(/([{};])/g, '<span style="color: #cccccc;">$1</span>')
        .replace(/([a-z-]+):/g, '<span style="color: #9cdcfe;">$1</span>')
        .replace(/(#[a-f0-9]{3,6})/gi, '<span style="color: #ce9178;">$1</span>')
        .replace(/(\d+)(px|rem|em|%)/g, '<span style="color: #b5cea8;">$1$2</span>');
    }
    return code;
  };

  const updateCode = (newItems) => {
    // Generate HTML content for each item
    const htmlContent = newItems.map(item => {
      switch (item.type) {
        case 'button':
          // HTML for button component
          return `<button class="prototype-button">${item.content}</button>`;
        case 'text':
          // HTML for text block component
          return `<div class="text-block">${item.content}</div>`;
        case 'navbar':
          // HTML for navbar component
          return `
            <nav class="nav-bar">
              <img src="${logo}" alt="Logo" style="width: 50px;" />
              <ul class="nav">
                <li class="nav-item">
                  <a href="#" class="button border-grey nav-link">Dropdownn</a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-link">
                      Menu 1-1
                      <p class="paragraph">Lorem Ipsum is simply dummy text of the printing.</p>
                    </a>
                    <a href="#" class="dropdown-link">
                      Menu 1-2
                      <p class="paragraph">Lorem Ipsum is simply dummy text of the printing.</p>
                    </a>
                    <a href="#" class="dropdown-link">
                      Menu 1-3
                      <p class="paragraph">Lorem Ipsum is simply dummy text of the printing.</p>
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a href="#" class="button border-grey nav-link">Dropdownn</a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-link">
                      Menu 1-1
                      <p class="paragraph">Lorem Ipsum is simply dummy text of the printing.</p>
                    </a>
                    <a href="#" class="dropdown-link">
                      Menu 1-2
                      <p class="paragraph">Lorem Ipsum is simply dummy text of the printing.</p>
                    </a>
                    <a href="#" class="dropdown-link">
                      Menu 1-3
                      <p class="paragraph">Lorem Ipsum is simply dummy text of the printing.</p>
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          `;
        case 'image':
          // HTML for image component
          return `<img src="path/to/image.jpg" alt="${item.content}" />`;
        case 'footer':
          // HTML for footer component
          return `<footer>${item.content}</footer>`;
        case 'cta':
          // HTML for CTA component
          return `
            <div class="cta-banner">
              <div class="cta-text">${item.content}</div>
              <img src="path/to/banner.jpg" alt="Banner" class="cta-image" />
            </div>
          `;
        case 'three-card-row':
          // HTML for three-card row component
          return `
            <div class="three-card-row">
              <div class="card">
                <h3>Card 1</h3>
                <p>Some description for card 1.</p>
              </div>
              <div class="card">
                <h3>Card 2</h3>
                <p>Some description for card 2.</p>
              </div>
              <div class="card">
                <h3>Card 3</h3>
                <p>Some description for card 3.</p>
              </div>
            </div>
          `;
        default:
          return '';
      }
    }).join('\n');

    // Conditionally build CSS based on the components present
    const cssParts = [];
    if (newItems.some(item => item.type === 'button')) {
      // CSS for button component
      cssParts.push(`
        .prototype-button {
          background-color: #2563eb;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .prototype-button:hover {
          background-color: #1d4ed8;
        }
      `);
    }
    if (newItems.some(item => item.type === 'text')) {
      // CSS for text block component
      cssParts.push(`
        .text-block {
          font-size: 16px;
          color: #333;
        }
      `);
    }
    if (newItems.some(item => item.type === 'navbar')) {
      // CSS for navbar component
      cssParts.push(`
        .nav-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
        }
        .nav {
          list-style: none;
          display: flex;
          gap: 10px;
        }
        .nav-item {
          position: relative;
        }
        .nav-link {
          text-decoration: none;
          color: #2563eb;
        }
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          border-radius: 8px;
          padding: 10px;
        }
        .nav-item:hover .dropdown-menu {
          display: block;
        }
        .dropdown-link {
          display: block;
          padding: 5px 10px;
          text-decoration: none;
          color: #333;
        }
        .paragraph {
          margin: 0;
          font-size: 12px;
          color: #666;
        }
      `);
    }
    if (newItems.some(item => item.type === 'cta')) {
      // CSS for CTA component
      cssParts.push(`
        .cta-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          background-color: #f0f0f0;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .cta-text {
          font-size: 18px;
          color: #333;
          flex: 1;
        }
        .cta-image {
          width: 150px;
          height: auto;
          border-radius: 8px;
        }
      `);
    }
    if (newItems.some(item => item.type === 'footer')) {
      // CSS for footer component
      cssParts.push(`
        footer {
          text-align: center;
          padding: 10px;
          background-color: #f8f8f8;
          border-top: 1px solid #e2e8f0;
        }
      `);
    }
    if (newItems.some(item => item.type === 'three-card-row')) {
      // CSS for three-card row component
      cssParts.push(`
        .three-card-row {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin: 20px 0;
        }
        .card {
          flex: 1;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          text-align: center;
        }
        .card h3 {
          margin-bottom: 10px;
          font-size: 20px;
          color: #333;
        }
        .card p {
          font-size: 14px;
          color: #666;
        }
      `);
    }

    // Combine all CSS parts into a single string
    const cssContent = cssParts.join('\n');

    // Set the complete HTML and CSS code for the live preview
    setCode(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          ${cssContent}
        </style>
      </head>
      <body>
        ${htmlContent}
      </body>
      </html>
    `);
  };

  const parseHTMLToItems = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const newItems = Array.from(doc.body.children).map((element) => {
      let type;
      switch (element.tagName.toLowerCase()) {
        case 'button':
          type = 'button';
          break;
        case 'div':
          if (element.classList.contains('text-block')) {
            type = 'text';
          }
          break;
        case 'nav':
          type = 'navbar';
          break;
        default:
          return null;
      }
      return {
        id: Date.now() + Math.random(),
        type,
        content: element.innerText
      };
    }).filter(item => item !== null);
    setItems(newItems);
  };

  useEffect(() => {
    if (!isUndoRedo) {
      setHistory((prevHistory) => [...prevHistory, items]);
      setRedoStack([]); // Clear redo stack on new action
    }
    updateCode(items); // Update HTML code
  }, [items]);

  useEffect(() => {
    if (isUndoRedo) {
      setIsUndoRedo(false);
    }
  }, [isUndoRedo]);

  const handleDragStart = (e, type, label) => {
    e.dataTransfer.setData('componentType', type);
    e.dataTransfer.setData('componentLabel', label);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDropIndex(index);
  };

  const handleDragLeave = () => {
    setDropIndex(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('componentType');
    const label = e.dataTransfer.getData('componentLabel');
    
    let content = label; // Default content is the label

    // Provide default content for specific component types
    if (type === 'cta') {
      content = `
        <h2>Join Us Today!</h2>
        <p>Sign up now to get exclusive access to our latest updates and offers.</p>
        <button class="cta-button">Sign Up</button>
      `;
    } else if (type === 'footer') {
      content = `
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      `;
    }

    const newItem = {
      id: Date.now(),
      type,
      content
    };

    const newItems = [...items];
    if (dropIndex !== null) {
      newItems.splice(dropIndex, 0, newItem);
    } else {
      newItems.push(newItem);
    }
    setItems(newItems);
    setDropIndex(null);
  };

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    setSelectedIndex(null);
  };

  const handleContentChange = (index, newContent) => {
    const newItems = [...items];
    newItems[index].content = newContent;
    setItems(newItems);
    updateCode(newItems);
  };

  const renderComponent = (item, index, isPreview) => {
    switch (item.type) {
      case 'button':
        return <button className="prototype-button">{item.content}</button>;
      case 'text':
        return <div className="text-block">{item.content}</div>;
      case 'navbar':
        return (
          <nav
            contentEditable={!isPreview}
            suppressContentEditableWarning
            onBlur={(e) => handleContentChange(index, e.target.innerText)}
            style={{
              padding: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <img src={logo} alt="Logo" style={{ width: '50px' }} />
            <ul className="nav">
              <li className="nav-item">
                <a href="#" className="button border-grey nav-link">Dropdownn</a>
                <div className="dropdown-menu" id="dropdown-0">
                  <a href="#" className="dropdown-link">
                    Menu 1-1
                    <p className="paragraph">
                      Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </a>
                  <a href="#" className="dropdown-link">
                    Menu 1-2
                    <p className="paragraph">
                      Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </a>
                  <a href="#" className="dropdown-link">
                    Menu 1-3
                    <p className="paragraph">
                      Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a href="#" className="button border-grey nav-link">Dropdownn</a>
                <div className="dropdown-menu" id="dropdown-0">
                  <a href="#" className="dropdown-link">
                    Menu 1-1
                    <p className="paragraph">
                      Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </a>
                  <a href="#" className="dropdown-link">
                    Menu 1-2
                    <p className="paragraph">
                      Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </a>
                  <a href="#" className="dropdown-link">
                    Menu 1-3
                    <p className="paragraph">
                      Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        );
      case 'image':
        return <img src="path/to/image.jpg" alt={item.content} />;
      case 'footer':
        return <footer dangerouslySetInnerHTML={{ __html: item.content }} />;
      case 'cta':
        return (
          <div className="cta-banner" 
          style={{
            backgroundColor: '#f8fafc',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div className="cta-text" dangerouslySetInnerHTML={{ __html: item.content }} />
            <img src="path/to/banner.jpg" alt="Banner" className="cta-image" />
          </div>
        );
      default:
        return null;
    }
  };

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  const handleCanvasClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedIndex(null);
    }
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    parseHTMLToItems(e.target.value);
  };

  const handleSaveChanges = () => {
    // No need to parse HTML to items here, as we're working with a single code block
  };

  const handleUndo = () => {
    if (history.length > 1) { // Ensure there's a previous state to revert to
      const lastState = history[history.length - 2];
      setRedoStack((prevRedoStack) => [items, ...prevRedoStack]);
      setHistory((prevHistory) => prevHistory.slice(0, -1));
      setItems(lastState);
      updateCode(lastState); // Update HTML code
      setIsUndoRedo(true);
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const nextState = redoStack[0];
      setHistory((prevHistory) => [...prevHistory, nextState]);
      setRedoStack((prevRedoStack) => prevRedoStack.slice(1));
      setItems(nextState);
      updateCode(nextState); // Update HTML code
      setIsUndoRedo(true);
    }
  };

  const handleUpdate = () => {
    // Implement your update logic here
    console.log('Update button clicked');
  };

  const styles = {
    container: {
      display: 'flex',
      gap: '2rem',
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: "'Inter', system-ui, sans-serif",
      overflow: 'hidden',
    },
    sidebar: {
      width: '280px',
      backgroundColor: 'white',
      padding: '20px',
      border: '1px solid #e2e8f0',
      borderTop: 'none',
      position: 'fixed',
      top: '110px',
      bottom: '0',
      overflowY: 'auto',
      left: '0',
    },

    sidebarRight: {
      width: '280px',
      backgroundColor: 'white',
      padding: '20px',
      border: '1px solid #e2e8f0',
      borderTop: 'none',
      position: 'fixed',
      top: '110px',
      bottom: '0',
      overflowY: 'auto',
      right: '0',
    },

    componentItem: {
      padding: '5px',
      backgroundColor: 'rgb(84 125 255)',
      borderRadius: '10px',
      borderRadius: '5px',
      marginBottom: '0.75rem',
      cursor: 'move',
      transition: 'all 0.2s ease',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontSize: '0.875rem',
      color: 'white',
    },
    mainContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      marginLeft: '0px',
      overflow: 'hidden',
    },
    canvas: {
      backgroundColor: 'white',
      minHeight: '600px',
      border: '1px solid #e2e8f0',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      borderTop: '1px solid #e2e8f0',
      marginTop: '150px',
      overflowY: 'auto',
      flex: 1,
      maxWidth: '1900px',
      marginLeft: '400px',
      marginRight: '400px',
    },
    canvasItem: {
      position: 'relative',
      
      backgroundColor: 'white',
      borderRadius: '12px',
      border: '1px solid transparent',
      transition: 'all 0.2s ease',
      marginBottom: '0.5rem',
    },
    selectedItem: {
      border: '2px solid #2563eb',
      backgroundColor: '#f0f7ff',
    },
    deleteButton: {
      position: 'absolute',
      right: '0.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: '#fee2e2',
      color: '#dc2626',
      border: 'none',
      borderRadius: '8px',
      padding: '0.5rem',
      cursor: 'pointer',
      opacity: 0,
      transition: 'opacity 0.2s ease',
    },
    orderButtons: {
      display: 'flex',
      gap: '0.5rem',
      marginLeft: 'auto',
    },
    orderButton: {
      backgroundColor: '#f1f5f9',
      color: '#475569',
      border: 'none',
      borderRadius: '8px',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontSize: '0.875rem',
    },
    codeEditor: {
      backgroundColor: '#f5f5f5',
      color: '#333',
      padding: '1.5rem',
      borderRadius: '12px',
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      fontSize: '0.875rem',
      lineHeight: '1.7',
      overflow: 'auto',
      height: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    textArea: {
      width: '100%',
      height: '300px',
      backgroundColor: '#ffffff',
      color: '#333',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '0.5rem',
      marginBottom: '1rem',
      resize: 'vertical',
      boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      whiteSpace: 'pre-wrap',
      overflowWrap: 'break-word',
      transition: 'background-color 0.3s ease',
    },
    saveButton: {
      marginTop: '1rem',
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      ':hover': {
        backgroundColor: '#1d4ed8',
      },
    },
    dropIndicator: {
      height: '2px',
      backgroundColor: '#2563eb',
      margin: '0.5rem 0',
      borderRadius: '4px',
    },
    tabButton: {
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontSize: '0.875rem',
      fontWeight: '500',
    },
    tabContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f1f5f9',
      borderRadius: '12px',
      padding: '0.5rem',
      margin: '1rem 0',
    },
    activeTab: {
      backgroundColor: '#2563eb',
      color: 'white',
    },
    navbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      borderBottom: '1px solid #e0e0e0',
      borderLeft: '1px solid #e0e0e0',
      borderRight: '1px solid #e0e0e0',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: 1000,
      backgroundColor: 'white',
    },

    navbar2: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0.5rem 2rem',
      borderBottom: '1px solid #e0e0e0',
      borderLeft: '1px solid #e0e0e0',
      borderRight: '1px solid #e0e0e0',
      position: 'fixed',
      top: '74px',
      left: '0',
      right: '0',
      zIndex: 1000,
      backgroundColor: 'white',
    },

    logo: {
      height: '40px',
    },
    previewButton: {
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    'wide-page': {
      maxWidth: '1900px',
      margin: 'auto' /* Center the page */
    },
  };

  const applySyntaxHighlighting = (code, language) => {
    if (!code) return '';

    if (language === 'html') {
      return code
        .replace(/(&lt;\/?[a-z]+(&gt;)?)/g, '<span style="color: #d73a49;">$1</span>')
        .replace(/(".*?")/g, '<span style="color: #032f62;">$1</span>');
    } else if (language === 'css') {
      return code
        .replace(/([{};])/g, '<span style="color: #d73a49;">$1</span>')
        .replace(/([a-z-]+):/g, '<span style="color: #005cc5;">$1</span>')
        .replace(/(#[a-f0-9]{3,6})/gi, '<span style="color: #d73a49;">$1</span>');
    } else if (language === 'js') {
      return code
        .replace(/(const|let|var|function|return|if|else|for|while|switch|case|break|default)/g, '<span style="color: #d73a49;">$1</span>')
        .replace(/(".*?"|'.*?')/g, '<span style="color: #032f62;">$1</span>');
    }
    return code;
  };

  const moveItemUp = (index) => {
    if (index === 0) return; // Can't move the first item up
    const newItems = [...items];
    [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    setItems(newItems);
  };

  const moveItemDown = (index) => {
    if (index === items.length - 1) return; // Can't move the last item down
    const newItems = [...items];
    [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
    setItems(newItems);
  };

  return (
    
    <div className="wide-page">
      <style>
      {`
        .component-item, .canvas-item {
          flex: 1 1 calc(50% - 10px);
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          padding: 10px;
          box-sizing: border-box;
          text-align: center;
          transition: transform 0.3s ease;
        }
        .component-item:hover, .canvas-item:hover {
          transform: scale(1.02);
        }
        .component-item:active, .canvas-item:active {
          transform: scale(1.05);
        }
      `}
    </style>
      
      {!isPreview && (
        <div style={{display: 'flex'}}>
        <div style={styles.navbar}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <TabUIElementOne
            tabs={['Drag & Drop', 'Live Preview']}
            defaultActiveTab={0}
            setActiveTab={(index) => setActiveTab(index === 0 ? 'dragDrop' : 'livePreview')}
          />
          <button
            onClick={togglePreview} className='button black-text button-small border-grey'
          >
            {isPreview ? 'Exit Preview' : 'Preview'}
          </button>
          
          
        </div>
        

      <div style={styles.navbar2}>
          
          
          
          <button
            onClick={handleUndo}
            className='button black-text button-small border-grey'
            disabled={history.length === 0}
          >
            Undo
          </button>
          <button
            onClick={handleRedo}
            className='button black-text button-small border-grey'
            disabled={redoStack.length === 0}
          >
            Redo
          </button>
        </div>
        
      </div>
      
      )}
      

      {activeTab === 'dragDrop' && (
        <div style={isPreview ? { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000, backgroundColor: 'white', overflow: 'auto' } : {}}>
          {isPreview && (
            <button
              onClick={togglePreview}
              className='button black-text button-small border-grey'
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                border: 'none',
                borderRadius: '8px',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                zIndex: 1001,
              }}
            >
              Exit Preview
            </button>
          )}
          <div style={isPreview ? { ...styles.container, height: '100vh', overflow: 'auto', padding: '0' } : styles.container}>
            {!isPreview && (
              <div style={styles.sidebar}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#0f172a', marginBottom: '1rem' }}>Components</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {components.map(({ type, label, icon }) => (
                    <div
                      key={type}
                      draggable
                      onDragStart={(e) => handleDragStart(e, type, label)}
                      className="component-item hover-circle grey"
                      style={{
                        flex: '1 1 calc(50% - 10px)',
                        backgroundColor: 'white',
                        border: '1px solid rgb(234 234 234)',
                        padding: '10px',
                        boxSizing: 'border-box',
                        textAlign: 'center',
                        borderRadius: '12px',
                      }}
                    >
                      <span>{icon}</span>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={isPreview ? { ...styles.canvas, flex: 1, overflow: 'auto', height: '100%', marginLeft: 0, marginRight: 0, maxWidth: '100%' } : styles.canvas}
                 onDragOver={(e) => e.preventDefault()}
                 onDrop={handleDrop}
                 onClick={handleCanvasClick}
            >
              {items.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div
                    style={{
                      ...styles.canvasItem,
                      ...(selectedIndex === index ? styles.selectedItem : {})
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(index);
                    }}
                  >
                    {renderComponent(item, index, isPreview)}
                  </div>
                  {dropIndex === index && (
                    <div style={styles.dropIndicator}></div>
                  )}
                </React.Fragment>
              ))}
              {dropIndex === items.length && (
                <div style={styles.dropIndicator}></div>
              )}
              {items.length === 0 && (
                <div style={{ 
                  textAlign: 'center', 
                  color: '#94a3b8', 
                  maxWidth: '1900px',
                  margin: 'auto',
                  maxWidth: '1000px',
                  padding: '2rem',
                  border: '2px dashed #e2e8f0',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc'
                }}>
                  Drag and drop components here
                </div>
              )}
            </div>

            {!isPreview && (
              
              <div style={styles.sidebarRight}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#0f172a', marginBottom: '1rem' }}>Canvas Elements</h2>
                <div
                  style={{
                    height: '230px',
                    overflow: 'auto',
                    borderBottom: '1px solid #e2e8f0',
                  }}
                  className='sidebar-right-container'
                >
                  
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      style={styles.componentItem}
                      className='canvas-item'
                    >
                      <span>{item.content}</span>
                      <div style={styles.orderButtons}>
                        <button
                          onClick={() => moveItemUp(index)}
                          style={styles.orderButton}
                          disabled={index === 0}
                        >
                          ↑
                        </button>
                        <button
                          onClick={() => moveItemDown(index)}
                          style={styles.orderButton}
                          disabled={index === items.length - 1}
                        >
                          ↓
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'livePreview' && (
        <div style={styles.mainContent}>
          <div style={styles.codeEditor}>
            <textarea
              value={code}
              onChange={handleCodeChange}
              style={styles.textArea}
            />
            <button
              onClick={handleSaveChanges}
              style={styles.saveButton}
            >
              Save Changes
            </button>
          </div>
          <div style={{ ...styles.canvas, marginTop: '1rem' }}>
            <div style={{ maxWidth: '100px', margin: 'auto' }}>
            <iframe
              srcDoc={code}
              style={{ width: '100%', height: '400px', border: 'none', borderRadius: '8px' }}
              title="Live Preview"
            />
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebPrototypeBuilder;