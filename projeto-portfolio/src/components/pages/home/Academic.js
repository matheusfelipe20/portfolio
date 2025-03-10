import React from 'react';
import './Academic.css';

const Academic = () => {
  return (
    <section className="academic-section" id="academic">
      <div className="academic-content">
        <div className="academic-text-container">
            <h2 className="academic-title">Formação acadêmica</h2>
            <hr className="academic-divider" />
            <div className="academic-text-div">
                <p className="academic-text-bold">
                    + Bacharel em Sistemas de Informação | UFPB ( 2020 / 2024 )
                </p>
                <p className="academic-text-bold">
                    + Especialização em Eng. de Software | UniAmérica ( 2025 / Em Andamento )
                </p>
                <p className="academic-text-bold">
                    + Curso de Inglês - Fluência | CCAA ( 2025 / Em Andamento )
                </p>
                <p className="academic-text-bold-destac">
                    + Laureado pelo curso de Sistemas de Informação | UFPB
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
