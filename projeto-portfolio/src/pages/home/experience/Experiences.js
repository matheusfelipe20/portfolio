import React, { useState } from 'react';
import { FaLaptop, FaBuilding,FaCode } from 'react-icons/fa';
import useTexts from '../../../hooks/useTexts';
import './Experiences.css';

const ExperienceItem = ({ title, subtitle, duration, description, icon }) => {
  const texts = useTexts();
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedText = isExpanded
    ? description
    : description.slice(0, 400) + (description.length > 400 ? '...' : '');

  return (
    <li className="experience-item">
      <div className="exp-header">
        <div className="exp-icon">{icon}</div>
        <div className="exp-information">
          <h3 className="exp-title">{title}</h3>
          <p className="exp-subtitle">{subtitle}</p>
          <p className="exp-duration">{duration}</p>
        </div>
      </div>
      <p className="exp-description">{displayedText}</p>
      {description.length > 400 && (
        <button
          className="exp-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? texts.ButtonHide_Experience : texts.ButtonView_Experience}
        </button>
      )}
    </li>
  );
};

const Experiences = () => {
  const texts = useTexts();

  const experiencesData = [
    {
      title: texts.ExpTitle_01_Experience,
      subtitle: texts.ExpSubtitle_01_Experience,
      duration: texts.ExpDuration_01_Experience,
      description: texts.ExpDescription_01_Experience,
      icon: <FaBuilding />
    },
    {
      title: texts.ExpTitle_02_Experience,
      subtitle: texts.ExpSubtitle_02_Experience,
      duration: texts.ExpDuration_02_Experience,
      description: texts.ExpDescription_02_Experience,
      icon: <FaCode />
    },
    {
      title: texts.ExpTitle_03_Experience,
      subtitle: texts.ExpSubtitle_03_Experience,
      duration: texts.ExpDuration_03_Experience,
      description: texts.ExpDescription_03_Experience,
      icon: <FaLaptop />
    },
  ];

  return (
    <section id="experiences">
      <div className="experiences-content">
        <h2 className="experiences-title">{texts.Title_Experience}</h2>
        <hr className="experiences-divider" />
        <ul className="experiences-list">
          {experiencesData.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              subtitle={exp.subtitle}
              duration={exp.duration}
              description={exp.description}
              icon={exp.icon}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experiences;
