import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LeftSidebar from './LeftSidebar';
import Introduction from './Introduction';
import Overview from './Overview'; 

const ButtonsPage = () => {
  return (
    <div className="Menu">
      <div className="left-sidebar">
        <LeftSidebar/>
      </div>

      <div className="main-content">
        <Routes>
          <Route path="introduction" element={<Introduction />} />
          <Route path="overview" element={<Overview />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default ButtonsPage;