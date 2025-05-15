import React, { useState } from 'react';
import './Figma.css';

import miiusportfolio from '../../../assets/img/figma/portfolioMiiusFigma.png';
import copasfilms from '../../../assets/img/figma/copasfilmsFigma.png';
import studioamanda from '../../../assets/img/figma/studioamandaFigma.png';
import missaosaude from '../../../assets/img/figma/missaosaudeFigma.png';

import useTexts from '../../../hooks/useTexts';

const Figma = () => {
  const texts = useTexts();
  const projectsFigmaData = [
    { id: 1, tag: texts.TagFigma_Project, title: 'Portfolio Miius', description: texts.DescriptionFigma_PortfolioMiius_Project, color: 'var(--color-tag-figma)', imgSrc: miiusportfolio, link: 'https://www.figma.com/design/pWK5Olgku3h6iL87sPidLT/Portfolio-Mari?node-id=0-1&p=f&t=xlqbQRHfu5apBXfp-0'},
    { id: 2, tag: texts.TagFigma_Project, title: 'Portfolio Copas Films', description: texts.DescriptionFigma_PortfolioCopasFilms_Project, color: 'var(--color-tag-figma)', imgSrc: copasfilms, link: 'https://www.figma.com/design/PIQNWgWNSC8F7Mm5BCC36e/Site-Copas-Films?node-id=0-1&p=f&t=LPrKmQtETS4vXOQ5-0'},
    { id: 3, tag: texts.TagFigma_Project, title: 'Portfolio Studio Amanda', description: texts.DescriptionFigma_PortfolioStudioAmanda_Project, color: 'var(--color-tag-figma)', imgSrc: studioamanda, link: 'https://www.figma.com/design/aVAJKgK30vmmYLwwV6FHtl/Site-Studio-Amanda-Paiva?node-id=0-1&p=f&t=t01PlvhzEwj7GXYQ-0'},
    { id: 4, tag: texts.TagFigma_Project, title: 'Site Missão com Saúde', description: texts.DescriptionFigma_MissaoSaude_Project, color: 'var(--color-tag-figma)', imgSrc: missaosaude, link: 'https://www.figma.com/design/4wCsylIfJQpSl3Z3b1dni9/Projeto-Alian%C3%A7a-Saude?node-id=0-1&p=f&t=OaOnh90hJIzP5m13-0'},  
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjectsFigma = showAll ? projectsFigmaData : projectsFigmaData.slice(0, 4);

  return (
    <section id="projectsFigma">
      <div className="projectsFigma-content">
        <h2 className="projectsFigma-title">{texts.Title_FigmaProject}</h2>
        <hr className="projectsFigma-divider" />
        <div className="projectsFigma-toggle-container">
          <button className="projectsFigma-toggle-button" onClick={() => setShowAll(!showAll)}>
            {showAll ? texts.ButtonHide_FigmaProject : texts.ButtonView_FigmaProject}
          </button>
        </div>
        <div className="projectsFigma-grid">
          {visibleProjectsFigma.map((project) => (
            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="figma-link">
              <button className="figma-item">
                <img src={project.imgSrc} alt={project.title} className="figma-image" />
                <div className="figma-text">
                  <span className="figma-tag" style={{ color: project.color }}>
                    [{project.tag}]
                  </span>
                  <h3 className="figma-title">{project.title}</h3>
                </div>
                <div className="figma-description">
                  <h4 className="figma-description-text">{project.description}</h4>
                </div>
              </button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Figma;