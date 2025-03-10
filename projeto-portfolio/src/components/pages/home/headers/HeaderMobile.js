import React from 'react';
import './HeaderMobile.css';
import imgHeader from '../../../../img/logo-intro-mobile.png';

const HeaderMobile = () => {

  return (
    <header className="header-mobile">
      <nav className="header-nav-mobile">
        <img className="header-img-mobile" src={imgHeader} alt="imagem logo" />
        <div className="header-intro-mobile">
          <a className="link-intro-mobile" href="#about">Sobre</a>
          <a className="link-intro-mobile" href="#projects">Projetos</a>
          <a className="link-intro-mobile" href="#experiences">Experiencias</a>
          <a className="link-intro-mobile" href="#contact">Contato</a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMobile;
