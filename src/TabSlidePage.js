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

  const components = [
    { type: 'button', label: 'Button', icon: '⚡' },
    { type: 'text', label: 'Text Block', icon: '📝' },
    { type: 'navbar', label: 'Navigation Bar', icon: '🧭' }
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
    const html = newItems.map((item) => {
      switch (item.type) {
        case 'button':
          return `<button class="prototype-button">${item.content}</button>`;
        case 'text':
          return `<div class="text-block">${item.content}</div>`;
        case 'navbar':
          return `<nav class="nav-bar">${item.content}</nav>`;
        default:
          return '';
      }
    }).join('\n');

    // Conditionally include CSS based on the presence of elements
    const cssParts = [];
    if (newItems.some(item => item.type === 'button')) {
      cssParts.push(`
.prototype-button {
  background: #2563eb;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.prototype-button:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}`);
    }
    if (newItems.some(item => item.type === 'text')) {
      cssParts.push(`
.text-block {
  color: #1f2937;
  margin: 8px 0;
  font-size: 16px;
  line-height: 1.6;
}`);
    }
    if (newItems.some(item => item.type === 'navbar')) {
      cssParts.push(`
.nav-bar {
  background: #f8fafc;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}`);
    }
    const css = cssParts.join('\n');

    // Conditionally include JavaScript based on the presence of elements
    const jsParts = [];
    if (newItems.some(item => item.type === 'button')) {
      jsParts.push(`
document.querySelectorAll('.prototype-button').forEach(button => {
  button.addEventListener('click', () => alert('Button clicked!'));
});
`);
    }
    const js = jsParts.join('\n');

    setCode(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    ${css}
  </style>
</head>
<body>
  ${html}
  <script>
    ${js}
  </script>
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
    updateCode(items);
  }, [items]);

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
    
    const newItem = {
      id: Date.now(),
      type,
      content: label
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

  const moveItem = (fromIndex, toIndex) => {
    if (fromIndex < 0 || toIndex < 0 || fromIndex >= items.length || toIndex >= items.length) {
      return;
    }

    const newItems = [...items];
    const [movedItem] = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, movedItem);
    setItems(newItems);
    setSelectedIndex(toIndex);
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
        return (
          <button
            contentEditable={!isPreview}
            suppressContentEditableWarning
            onBlur={(e) => handleContentChange(index, e.target.innerText)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 cursor-pointer"
          >
            {item.content}
          </button>
        );
      case 'text':
        return (
          <div
            contentEditable={!isPreview}
            suppressContentEditableWarning
            onBlur={(e) => handleContentChange(index, e.target.innerText)}
            className="text-slate-800 leading-relaxed"
          >
            {item.content}
          </div>
        );
      case 'navbar':
        return (
          <div
            contentEditable={!isPreview}
            suppressContentEditableWarning
            onBlur={(e) => handleContentChange(index, e.target.innerText)}
            className="bg-slate-50 p-4 rounded-xl shadow-sm"
          >
            {item.content}
          </div>
        );
      default:
        return null;
    }
  };

  const handleDragStartCanvasItem = (e, index) => {
    e.dataTransfer.setData('draggedItemIndex', index);
  };

  const handleDropCanvasItem = (e, index) => {
    e.preventDefault();
    const draggedItemIndex = parseInt(e.dataTransfer.getData('draggedItemIndex'), 10);
    if (draggedItemIndex !== index) {
      moveItem(draggedItemIndex, index);
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
      padding: '1.5rem',
      border: '1px solid #e2e8f0',
      borderTop: 'none',
      position: 'fixed',
      top: '60px',
      bottom: '0',
      overflowY: 'auto',
      left: '0',
    },

    sidebarRight: {
      width: '280px',
      backgroundColor: 'white',
      padding: '1.5rem',
      border: '1px solid #e2e8f0',
      borderTop: 'none',
      position: 'fixed',
      top: '60px',
      bottom: '0',
      overflowY: 'auto',
      right: '0',
    },

    componentItem: {
      padding: '0.875rem',
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      marginBottom: '0.75rem',
      cursor: 'move',
      transition: 'all 0.2s ease',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontSize: '0.875rem',
      color: '#475569',
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
      borderTop: 'none',
      overflowY: 'auto',
      flex: 1,
      maxWidth: '1900px',
      marginLeft: '400px',
      marginRight: '400px',
    },
    canvasItem: {
      position: 'relative',
      padding: '1rem',
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

  return (
    <div className="wide-page">
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
          <div style={isPreview ? { ...styles.container, height: '100vh', overflow: 'auto' } : styles.container}>
            {!isPreview && (
              <>
                <div style={styles.sidebar}>
                  <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#0f172a', marginBottom: '1rem' }}>Components</h2>
                  {components.map(({ type, label, icon }) => (
                    <div
                      key={type}
                      draggable
                      onDragStart={(e) => handleDragStart(e, type, label)}
                      style={styles.componentItem}
                    >
                      <span>{icon}</span>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                
              </>
            )}

            <div style={styles.mainContent}>
              <div
                style={isPreview ? { ...styles.canvas, flex: 1, overflow: 'auto', height: '100%' } : styles.canvas}
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
                      onDragStart={(e) => handleDragStartCanvasItem(e, index)}
                      onDragOver={(e) => handleDragOver(e, index)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDropCanvasItem(e, index)}
                      draggable={!isPreview}
                    >
                      {renderComponent(item, index, isPreview)}
                      {!isPreview && selectedIndex === index && (
                        <div style={styles.orderButtons}>
                          {index > 0 && (
                            <button
                              style={styles.orderButton}
                              onClick={() => moveItem(index, index - 1)}
                            >
                              ↑
                            </button>
                          )}
                          {index < items.length - 1 && (
                            <button
                              style={styles.orderButton}
                              onClick={() => moveItem(index, index + 1)}
                            >
                              ↓
                            </button>
                          )}
                          <button
                            style={styles.deleteButton}
                            onClick={() => handleDelete(index)}
                          >
                            ×
                          </button>
                        </div>
                      )}
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
              <div style={styles.sidebar}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#0f172a', marginBottom: '1rem' }}>Components</h2>
                {components.map(({ type, label, icon }) => (
                  <div
                    key={type}
                    draggable
                    onDragStart={(e) => handleDragStart(e, type, label)}
                    style={styles.componentItem}
                  >
                    <span>{icon}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={styles.sidebarRight}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#0f172a', marginBottom: '1rem' }}>Components</h2>
              {components.map(({ type, label, icon }) => (
                <div
                  key={type}
                  draggable
                  onDragStart={(e) => handleDragStart(e, type, label)}
                  style={styles.componentItem}
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
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
            <iframe
              srcDoc={code}
              style={{ width: '100%', height: '400px', border: 'none', borderRadius: '8px' }}
              title="Live Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WebPrototypeBuilder;