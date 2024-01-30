import  { useState } from 'react';
import profile from '../assets/images/download.jpg'
import { NavLink } from 'react-router-dom';

const ProfileCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '150px',
    height: '150px',
    transition: '0.8s',
    borderRadius: '100%' 
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const detailsStyle = {
    position: 'absolute',
    bottom: isHovered ? '0' : '-100%',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    opacity: isHovered ? '0.6' : '0',
    transition: 'opacity 0.3s ease-in-out, bottom 0.5s ease-in-out',
    transitionDelay: isHovered ? '0.5s' : '0s',
    textDecoration: 'none' 
  };
  

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={profile} alt="Profile" style={imageStyle} />
      {isHovered && (
        <div style={detailsStyle}>
          <NavLink to="/login">John</NavLink>
          <p>Developer</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
