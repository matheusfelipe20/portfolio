import React from 'react';
import './About.css';

import imgAbout from '../../../assets/img/photo-about.jpeg';
import useTexts from '../../../hooks/useTexts';

const About = () => {
  const texts = useTexts();

  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-text-container">
          <h2 className="about-title">{texts.Title_About}</h2>
          <hr className="about-divider" />
          <p className="about-text">
            {texts.Text01_About}
          </p>
          <p className="about-text">
            {texts.Text02_About}
          </p>
          <p className="about-text">
            {texts.Text03_About}
          </p>
        </div>
        <div className="about-image-container">
          <img src={imgAbout} alt="Foto de perfil" className="about-image" />
        </div>
      </div>
      <div className="panel-statistic-about">
        <div className="card-statistic">
          <p className="value-statistic">2+</p>
          <p className="text-statistic">{texts.PanelStatisticYears_About}</p>
        </div>
        <div className="card-statistic">
          <p className="value-statistic">4+</p>
          <p className="text-statistic">{texts.PanelStatisticParticipation_About}</p>
        </div>
        <div className="card-statistic">
          <p className="value-statistic">15+</p>
          <p className="text-statistic">{texts.PanelStatisticProjects_About}</p>
        </div>
      </div>
    </section>
  );
};

export default About;