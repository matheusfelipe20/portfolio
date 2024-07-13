import React from 'react';
import './SocialButton.css';

const SocialButton = ({ icon, alt, href }) => (
  <a className="social-btn" href={href} target="_blank" rel="noopener noreferrer">
    <img src={icon} alt={alt} />
  </a>
);

export default SocialButton;
