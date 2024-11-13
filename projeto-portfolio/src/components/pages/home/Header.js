import React from 'react';
import './Header.css';
import SocialButton from '../../buttons/SocialButton/SocialButton';
import linkedinIcon from '../../../icons/linkedin-white.svg';
import githubIcon from '../../../icons/github-white.svg';
import emailIcon from '../../../icons/email-white.svg';
import imgHeader from '../../../img/logo-intro.png';

const Header = () => (
  <header className="header">
    <img className="header-img" src={imgHeader} alt="imagem logo"/>
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
      <SocialButton height={"28px"} width={"28px"} icon={emailIcon} alt="Instagram" href="https://www.instagram.com/felipe_2012matheus?igsh=MWx0ZmdmbXc1ODYyNQ==" />
    </div>
  </header>
);

export default Header;