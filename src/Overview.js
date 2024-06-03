import React from 'react';
import ToastNotification from './ToastNotifications';
import ExpandingButton from './ExpandingButton';

const Overview = () => {
  return (
    <div>
      <h1>Toast Notifications</h1>
      <p>This is the Overview content.</p>
      
      <ToastNotification/>
      <div className='flex'>
        <div>
      <h1>See How It Works</h1>
      <p>Click for an explantion</p>
      </div>
      <div>
      <ExpandingButton marginLeft="20px" bgColor="#6d37ff" />
      <ExpandingButton marginLeft="50px" bgColor="#44d375" />
      <ExpandingButton marginLeft="20px" bgColor="#6d37ff" />
      </div>
      </div>
    </div>
  );
};

export default Overview;
