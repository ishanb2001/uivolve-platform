import React from 'react';
import styled from 'styled-components';

// Styled components
const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  margin: 0;
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const Avatar = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  background-color: #e0ffe0;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const StatusIndicator = styled.div`
  position: absolute;
  bottom: -5px;
  right: 3px;
  width: 20px;
  height: 20px;
  background-color: green;
  border: 2px solid white;
  border-radius: 50%;
  z-index: 2;
`;

// React component
const AvatarWithStatus = () => {
  return (
    <Body>
      <AvatarContainer>
        <Avatar>
          <AvatarImage src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="Avatar 1" />
          <StatusIndicator />
        </Avatar>
      </AvatarContainer>
    </Body>
  );
};

export default AvatarWithStatus;
