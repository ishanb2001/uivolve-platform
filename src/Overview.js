import React from 'react';
import ToastNotification from './ToastNotifications';
import ExpandingButton from './ExpandingButton';
import FunctionLayout from './FunctionLayout';
import ToggleStep from './ToggleStep';
import Step from './Step';
import FunctionTitle from './FunctionTite';

const Overview = () => {
    const options = [
        { 
            text: "add class 'show' to toast", 
            marginLeft: '20px',
        },
    ];

    const options1 = [
        { 
            text: "remove class 'show' from toast", 
            marginLeft: '20px',
            subOptions: [
                { text: 'Sub Option 1-1', marginLeft: '40px' },
                {
                    text: "Nested Option with Empty Sub-Options",
                    marginLeft: '40px',
                    subOptions: [] 
                }
            ]
        },
    ];

    const nestedOptions = [
        {
            text: "wssip",
            marginLeft: '20px',
            subOptions: [
                {
                    text: "ayyy",
                    marginLeft: '20px',
                    subOptions: [
                        { text: "end", marginLeft: '20px' }
                    ]
                }
            ]
        }
    ];

    return (
        <div>
            <h1>Toast Notifications</h1>
            <p>This is the Overview content.</p>
            <div>
                <ToastNotification />
            </div>
            <div className='flex-container' style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ width: '50%' }}>
                    <Step text="Hi" />
                    <ToggleStep text="hello" options={nestedOptions} />
                    <Step text="Hi"></Step>
                    <Step text="Hi"></Step>
                    <FunctionTitle text="function showToast"></FunctionTitle>
                    <Step text="set toast to new div"></Step>
                    <Step text="add class 'toast' to toast"></Step>
                    <Step text="set text 'This is a toast notification!' to toast"></Step>
                    <Step text="append toast to container"></Step>
                    <ToggleStep text="wait for 10 milliseconds" options={options} />
                    <ToggleStep text="wait for 3000 milliseconds" options={options1} />
                    <FunctionTitle text="End Function"></FunctionTitle>
                    <Step text="Hi"></Step>
                </div>
                <div style={{ width: '50%' }}>
                    <div>
                        {/* Additional content can be added here */}
                    </div>
                </div>
            </div>
            <div>
      <iframe 
        src="https://codesandbox.io/embed/kq2w28?view=editor+%2B+preview&module=%2Findex.html&hidenavigation=1"
        style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
        title="toast-notification"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
        </div>
    );
};

export default Overview;
