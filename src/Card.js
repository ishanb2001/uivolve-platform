import React from 'react';

const UICard = ({ label, text, bgColor }) => {
  return (
    <div className="ui-card" style={{ padding: 20, backgroundColor: bgColor }}>
      <div className="ui-card-label">{label}</div>
      <div style={{ marginTop: "200px", fontWeight:"500", backgroundColor: bgColor }} className="ui-card-text">{text}</div>
    </div>
  );
};

export default UICard;
