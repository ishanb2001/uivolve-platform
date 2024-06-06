import React from 'react';
import './Block.css';

const Block = ({ type, header, content, children }) => {
  return (
    <div className={`space ${type}`}>
      {header && <div className="block-header">{header}</div>}
      {content && <div className="block-content">{content}</div>}
      {children}
    </div>
  );
};

export default Block;
