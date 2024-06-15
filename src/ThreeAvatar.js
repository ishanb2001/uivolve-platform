import React from 'react';

const AvatarCircles = () => {
    const avatarContainerStyle = {
        display: 'flex',
        justifyContent: 'center'
    };

    const avatarStyle = {
        width: '40px', /* Smaller width */
        height: '40px', /* Smaller height */
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '4px solid white', /* Adjusted border width */
        marginLeft: '-15px', /* Negative margin for overlap */
    };

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    };

    return (
        <div style={avatarContainerStyle}>
            <div style={{ ...avatarStyle, backgroundColor: '#e0ffe0', zIndex: 3 }}>
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="Avatar 1" style={imgStyle} />
            </div>
            <div style={{ ...avatarStyle, backgroundColor: '#e0e0ff', zIndex: 2 }}>
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="Avatar 2" style={imgStyle} />
            </div>
            <div style={{ ...avatarStyle, backgroundColor: '#ffe0ff', zIndex: 1 }}>
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="Avatar 3" style={imgStyle} />
            </div>
        </div>
    );
}

export default AvatarCircles;
