import React from 'react';
import './Header.css'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><a className="link-intro" href="#intro">Inicio</a></li>
        <li><a className="link-intro" href="#about">Sobre Mim</a></li>
        <li><a className="link-intro" href="#projects">Projetos</a></li>
        <li><a className="link-intro" href="#experiences">Experiências</a></li>
        <li><a className="link-intro" href="#contact">Contato</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
