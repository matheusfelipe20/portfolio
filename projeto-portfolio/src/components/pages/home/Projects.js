import React from 'react';
import './Projects.css';
import chatSocketTCP from '../../../img/project/socket-tcp.png';
import meajude from '../../../img/project/meajude.png';
import suadieta from '../../../img/project/suadieta.png';
import jogoNave from '../../../img/project/jogo-nave.png';
import apostasEsportivas from '../../../img/project/apostas-sport.png';
import missaoSaude from '../../../img/project/missaoSaude.png';
import aspnet from '../../../img/project/aspnet.png'

const projectsData = [
  { id: 1, tag: 'Projeto', title: 'Sist. Apostas Esportivas', color: 'rgb(164 0 255)', imgSrc: apostasEsportivas, link: 'https://github.com/matheusfelipe20/desafio-api-jogos'},
  { id: 2, tag: 'Projeto', title: 'Proj. DSC - UFPB', color: 'rgb(164 0 255)', imgSrc: meajude, link: 'https://github.com/matheusfelipe20/ChatSocketTCP'},
  { id: 3, tag: 'Projeto', title: 'Proj. Sua Deita - UFPB', color: 'rgb(164 0 255)', imgSrc: suadieta, link: 'https://github.com/matheusfelipe20/ESA-2022.1--SuaDieta--Projeto-UFPB'},
  { id: 4, tag: 'Site', title: 'Missão com Saúde', color: 'rgb(255 125 0)', imgSrc: missaoSaude, link: 'https://matheusfelipe20.github.io/Projeto-AS/'},
  { id: 5, tag: 'Estudo', title: 'Chat Socket TCP', color: '#00a7ff', imgSrc: chatSocketTCP, link: 'https://github.com/matheusfelipe20/ChatSocketTCP'},
  { id: 6, tag: 'Jogo', title: 'Jogo Nave Simples', color: 'rgb(0 255 86)', imgSrc: jogoNave, link: 'https://github.com/matheusfelipe20/Jogo-Nave-simples-JAVA'},
  { id: 7, tag: 'Treino', title: 'Proj. Asp.net', color: 'rgb(255 0 57)', imgSrc: aspnet, link: 'https://github.com/matheusfelipe20/Projeto-ASP.NET'},
];

const Projects = () => (
  <section id="projects">
    <div className="projects-content">
      <h2 className="projects-title">Projetos</h2>
      <hr className="divider-projects" />
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
            </button>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
