import React from 'react';
import './Footer.css';
import '../variables/Colors.css';
import SocialButton from './buttons/SocialButton/SocialButton';
import linkedinIcon from '../icons/linkedin.png';
import githubIcon from '../icons/github.png';

const Footer = () => (
  <footer>
    <hr className="divider-footer" />
    <SocialButton icon={linkedinIcon} alt="LinkedIn" href="https://www.linkedin.com" />
    <SocialButton icon={githubIcon} alt="Github" href="https://www.linkedin.com" />
    <p>2024 &copy; Matheus - Todos os direitos reservados.</p>
  </footer>
);

export default Footer;
