import React from 'react';
import './HeaderDesktop.css';
import SocialButton from '../../../buttons/SocialButton/SocialButton.js';
import linkedinIcon from '../../../../icons/linkedin-white.svg';
import githubIcon from '../../../../icons/github-white.svg';
import instaIcon from '../../../../icons/instagram-white.svg';
import imgHeader from '../../../../img/logo-intro.png';

const HeaderDesktop = () => (
  <header className="header-desktop">
    <img className="header-img" src={imgHeader} alt="imagem logo" />
    <nav className="header-nav">
      <ul>
        <li><a className="link-intro" href="#about">Sobre Mim</a></li>
        <li><a className="link-intro" href="#academic"> Acadêmico</a></li>
        <li><a className="link-intro" href="#projects">Projetos</a></li>
        <li><a className="link-intro" href="#experiences">Experiências</a></li>
        <li><a className="link-intro" href="#contact">Contato</a></li>
      </ul>
    </nav>
    <div className="header-social">
      <SocialButton height={"28px"} width={"28px"} icon={linkedinIcon} alt="Linkedin" href="https://www.linkedin.com/in/matheus-felipe-bandeira-oliveira-30a6b8206/" />
      <SocialButton height={"28px"} width={"28px"} icon={githubIcon} alt="Github" href="https://github.com/matheusfelipe20" />
      <SocialButton height={"28px"} width={"28px"} icon={instaIcon} alt="Instagram" href="https://www.instagram.com/felipe_2012matheus?igsh=MWx0ZmdmbXc1ODYyNQ==" />
    </div>
  </header>
);

export default HeaderDesktop;
