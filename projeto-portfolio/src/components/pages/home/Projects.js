import React from 'react';
import './Projects.css';

import chatSocketTCP from '../../../img/project/socket-tcp.png';
import meajude from '../../../img/project/meajude.png';
import suadieta from '../../../img/project/suadieta.png';
import jogoNave from '../../../img/project/jogo-nave.png';
import apostasEsportivas from '../../../img/project/apostas-sport.png';
import missaoSaude from '../../../img/project/missaoSaude.png';
import aspnet from '../../../img/project/aspnet.png'
import portfolio from '../../../img/project/portfolio.png'

const projectsData = [
  { id: 1, tag: 'Projeto', title: 'Sist. Apostas Esportivas', color: 'var(--color-tag-project)', imgSrc: apostasEsportivas, link: 'https://github.com/matheusfelipe20/desafio-api-jogos', tag_technology: ['Golang', 'JavaScript'],},
  { id: 2, tag: 'Projeto', title: 'Proj. DSC - UFPB', color: 'var(--color-tag-project)', imgSrc: meajude, link: 'https://github.com/matheusfelipe20/ChatSocketTCP', tag_technology: ['Java', 'Spring Boot'],},
  { id: 3, tag: 'Projeto', title: 'Proj. Sua Deita - UFPB', color: 'var(--color-tag-project)', imgSrc: suadieta, link: 'https://github.com/matheusfelipe20/ESA-2022.1--SuaDieta--Projeto-UFPB', tag_technology: ['JavaScript', 'HTML/CSS', 'Python'],},
  { id: 4, tag: 'Site', title: 'Missão com Saúde', color: 'var(--color-tag-site)', imgSrc: missaoSaude, link: 'https://matheusfelipe20.github.io/Projeto-AS/', tag_technology: ['React', 'JavaScript'],},
  { id: 5, tag: 'Site', title: 'Meu Portfolio', color: 'var(--color-tag-site)', imgSrc: portfolio, link: 'https://github.com/matheusfelipe20/portfolio', tag_technology: ['React', 'JavaScript'],},
  { id: 6, tag: 'Estudo', title: 'Chat Socket TCP', color: 'var(--color-tag-study)', imgSrc: chatSocketTCP, link: 'https://github.com/matheusfelipe20/ChatSocketTCP', tag_technology: ['Java'],},
  { id: 7, tag: 'Jogo', title: 'Jogo Nave Simples', color: 'var(--color-tag-game)', imgSrc: jogoNave, link: 'https://github.com/matheusfelipe20/Jogo-Nave-simples-JAVA', tag_technology: ['Java'],},
  { id: 8, tag: 'Treino', title: 'Proj. Asp.net', color: 'var(--color-tag-training)', imgSrc: aspnet, link: 'https://github.com/matheusfelipe20/Projeto-ASP.NET', tag_technology: ['C#', 'ASP.Net', 'HTML/CSS'],},
];

const Projects = () => (
  <section id="projects">
    <div className="projects-content">
      <h2 className="projects-title">Projetos</h2>
      <hr className="projects-divider" />
      <div className="projects-grid">
        {projectsData.map((project) => (
          <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
            <button className="project-item">
              <img src={project.imgSrc} alt={project.title} className="project-image" />
              <div className="project-text">
                <span className="project-tag" style={{ color: project.color }}>
                  [{project.tag}]
                </span>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="project-category">
                {project.tag_technology.map((tech, index) => (
                  <span key={index} className="project-tag-technology">{tech}</span>
                ))}
              </div>
            </button>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
