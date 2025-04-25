import React from 'react';
import { Code2, Database, Wrench } from 'lucide-react'; // trocado o ícone
import './Skills.css';

import useTexts from '../../../hooks/useTexts';

const Skills = () => {
  const texts = useTexts();

  return (
    <section id="skills">
      <div className="skills-content">
        <h2 className="skills-title">{texts.Title_Skills}</h2>
        <hr className="skills-divider" />

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-header">
              <Code2 className="skill-icon" />
              <h3 className="skill-title">Front-end</h3>
            </div>
            <p className="skill-text">
              <strong>Frameworks:</strong> React, Vue.js, Angular<br />
              <strong>{texts.LanguagesCard_01_Skills}:</strong> TypeScript, HTML, CSS<br />
              <strong>{texts.PreprocessorsCard_01_Skills}:</strong> SASS
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <Database className="skill-icon" />
              <h3 className="skill-title">Back-end</h3>
            </div>
            <p className="skill-text">
              <strong>{texts.LanguagesCard_02_Skills}:</strong> Java, Golang, C#<br />
              <strong>Frameworks:</strong> Spring Boot<br />
              <strong>{texts.DatabaseCard_02_Skills}:</strong> SQL, PostgreSQL, MongoDB, MySQL, Oracle<br />
              <strong>{texts.Tests_02_Skills}:</strong> {texts.TestsResponse_02_Skills}
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <Wrench className="skill-icon" />
              <h3 className="skill-title">Dev Tools</h3>
            </div>
            <p className="skill-text">
              <strong>{texts.Control_03_Skills}:</strong> Git & GitHub<br />
              <strong>Containers:</strong> Docker<br />
              <strong>CI/CD:</strong> GitHub Actions<br />
              <strong>{texts.Others_03_Skills}:</strong> Figma, Postman, VSCode
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;