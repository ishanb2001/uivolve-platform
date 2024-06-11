import React from 'react';
import './Custom.css';

const AvatarCircles = () => {
    return (
        <div className="avatar-container">
            <div className="avatar" id="avatar1">
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="Avatar 1" />
            </div>
            <div className="avatar" id="avatar2">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="Avatar 2" />
            </div>
            <div className="avatar" id="avatar3">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="Avatar 3" />
            </div>
        </div>
    );
}

export default AvatarCircles;
