import React from 'react';
import './About.css';

import imgAbout from '../../../img/photo-about.jpeg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-image-container">
          <img src={imgAbout} alt="Foto de perfil" className="about-image" />
        </div>
        <div className="about-text-container">
          <h2 className="about-title">Sobre Mim</h2>
          <hr className="about-divider" />
          <p className="about-text">
            Olá! Sou um desenvolvedor apaixonado por transformar ideias em realidade. Tenho experiência em desenvolvimento web, especialmente com React, VueJS e Spring Boot. Além disso, estou sempre buscando melhorar minhas habilidades e aprender novas tecnologias.
          </p>
          <p className="about-text">
            Ao longo da minha jornada, tive a oportunidade de trabalhar em projetos incríveis tanto na faculdade, como também, no mercado de trabalho. Dessa forma, estou empolgado para enfrentar novos desafios e continuar crescendo como profissional!
          </p>
          <p className="about-text-bold">
            + Bacharel em Sistemas de Informação | UFPB (2020 / 2024)
          </p>
          <p className="about-text-bold">
            + Laureado pelo curso de Sistemas de Informação
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
