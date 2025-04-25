import React from 'react';
import './Academic.css';

import useTexts from '../../../hooks/useTexts';

const Academic = () => {
  const texts = useTexts();

  return (
    <section className="academic-section" id="academic">
      <div className="academic-content">
        <div className="academic-header">
          <h2 className="academic-title">{texts.Title_Academic}</h2>
          <hr className="academic-divider" />
        </div>
        <div className="academic-grid">
          <div className="academic-card destaque">
            <h2 className="academic-course">{texts.TitleCard_01_Course}</h2>
            <h3 className="academic-course">{texts.NameCourseCard_01_Course}</h3>
            <p className="academic-institution">{texts.InstitutionCard_01_Course}</p>
            <p className="academic-highlight">{texts.HighlightnCard_01_Course}</p>
          </div>
          <div className="academic-card">
          <h2 className="academic-course">{texts.TitleCard_02_Course}</h2>
            <h3 className="academic-course">{texts.NameCourseCard_02_Course}</h3>
            <p className="academic-institution">{texts.InstitutionCard_02_Course}</p>
          </div>
          <div className="academic-card">
          <h2 className="academic-course">{texts.TitleCard_03_Course}</h2>
            <h3 className="academic-course">{texts.NameCourseCard_03_Course}</h3>
            <p className="academic-institution">{texts.InstitutionCard_03_Course}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;