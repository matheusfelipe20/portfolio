import React, { useState } from 'react';
import './Projects.css';

import chatSocketTCP from '../../../assets/img/project/socket-tcp.png';
import meajude from '../../../assets/img/project/meajude.png';
import copasfilms from '../../../assets/img/project/copasfilms.png';
import suadieta from '../../../assets/img/project/suadieta.png';
import apostasEsportivas from '../../../assets/img/project/apostas-sport.png';
import aspnet from '../../../assets/img/project/aspnet.png'
import portfolio from '../../../assets/img/project/portfolio.png'
import studioamanda from '../../../assets/img/project/studioAmanda.png'

import useTexts from '../../../hooks/useTexts';

const Projects = () => {
  const texts = useTexts();
  const projectsData = [
    { id: 1, tag: texts.TagFreelancer_Project, title: 'Studio Amanda Paiva', description: texts.DescriptionProject_StudioAmandaPaiva_Project, color: 'var(--color-tag-freelancer)', imgSrc: studioamanda, link: 'https://studioamandapaiva.com.br/', tag_technology: ['React', 'JavaScript'],}, 
    { id: 2, tag: texts.TagFreelancer_Project, title: 'Copas Films', description: texts.DescriptionProject_CopasFilms_Project, color: 'var(--color-tag-freelancer)', imgSrc: copasfilms, link: 'https://copasfilms.github.io/portfolio/', tag_technology: ['React', 'JavaScript'],}, 
    { id: 3, tag: texts.TagProfile_Project, title: 'Meu Portfolio', description: texts.DescriptionProject_MeuPortfolio_Project, color: 'var(--color-tag-profile)', imgSrc: portfolio, link: 'https://github.com/matheusfelipe20/portfolio', tag_technology: ['React', 'JavaScript'],},
    { id: 4, tag: texts.TagProject_Project, title: 'Proj. DSC - UFPB', description: texts.DescriptionProject_DscUFPB_Project, color: 'var(--color-tag-project)', imgSrc: meajude, link: 'https://github.com/matheusfelipe20/Projeto-Final-DSC', tag_technology: ['Java', 'Spring Boot'],},
    { id: 5, tag: texts.TagProject_Project, title: 'Proj. Sua Dieta - UFPB', description: texts.DescriptionProject_SuaDieta_Project, color: 'var(--color-tag-project)', imgSrc: suadieta, link: 'https://github.com/matheusfelipe20/ESA-2022.1--SuaDieta--Projeto-UFPB', tag_technology: ['JavaScript', 'HTML/CSS', 'Python'],},
    { id: 6, tag: texts.TagEstudy_Project, title: 'Chat Socket TCP', description: texts.DescriptionProject_ChatSocket_Project, color: 'var(--color-tag-study)', imgSrc: chatSocketTCP, link: 'https://github.com/matheusfelipe20/ChatSocketTCP', tag_technology: ['Java'],},
    { id: 7, tag: texts.TagTraining_Project, title: 'Proj. Asp.net', description: texts.DescriptionProject_AspNet_Project, color: 'var(--color-tag-training)', imgSrc: aspnet, link: 'https://github.com/matheusfelipe20/Projeto-ASP.NET', tag_technology: ['C#', 'ASP.Net', 'HTML/CSS'],},
    { id: 8, tag: texts.TagProject_Project, title: 'Sist. Apostas Esportivas', description: texts.DescriptionProject_ApostasEsportivas_Project, color: 'var(--color-tag-project)', imgSrc: apostasEsportivas, link: 'https://github.com/matheusfelipe20/desafio-api-jogos', tag_technology: ['Golang', 'JavaScript'],},
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <section id="projects">
      <div className="projects-content">
        <h2 className="projects-title">{texts.Title_Project}</h2>
        <hr className="projects-divider" />
        <div className="projects-toggle-container">
          <button className="projects-toggle-button" onClick={() => setShowAll(!showAll)}>
            {showAll ? texts.ButtonHide_Project : texts.ButtonView_Project}
          </button>
        </div>
        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <button className="project-item">
                <img src={project.imgSrc} alt={project.title} className="project-image" />
                <div className="project-text">
                  <span className="project-tag" style={{ color: project.color }}>
                    [{project.tag}]
                  </span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <div className="project-description">
                  <h4 className="project-description-text">{project.description}</h4>
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
};

export default Projects;
