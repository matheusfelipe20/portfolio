import React from 'react';
import './Header.css';
import SocialButton from '../../buttons/SocialButton/SocialButton';
import linkedinIcon from '../../../icons/linkedin-white.png';
import githubIcon from '../../../icons/github-white.png';
import instagramIcon from '../../../icons/instagram-white.png';
import imgHeader from '../../../img/logo-intro-1.png';

const Header = () => (
  <header className="header">
    <img className="header-img" src={imgHeader} />
    <nav className="header-nav">
      <ul>
        <li><a className="link-intro" href="#intro">Inicio</a></li>
        <li><a className="link-intro" href="#about">Sobre Mim</a></li>
        <li><a className="link-intro" href="#projects">Projetos</a></li>
        <li><a className="link-intro" href="#experiences">Experiências</a></li>
        <li><a className="link-intro" href="#contact">Contato</a></li>
      </ul>
    </nav>
    <div className="header-social">
      <SocialButton height={"28px"} width={"28px"} icon={linkedinIcon} alt="Linkedin" href="https://www.linkedin.com/in/matheus-felipe-bandeira-oliveira-30a6b8206/" />
      <SocialButton height={"28px"} width={"28px"} icon={githubIcon} alt="Github" href="https://github.com/matheusfelipe20" />
      <SocialButton height={"28px"} width={"28px"} icon={instagramIcon} alt="Instagram" href="#" />
    </div>
  </header>
);

export default Header;
