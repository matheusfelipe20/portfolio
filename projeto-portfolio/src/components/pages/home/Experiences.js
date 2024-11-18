import React, { useState } from 'react';
import './Experiences.css';

// Exibe os itens em experiência
const ExperienceItem = ({ title, subtitle, duration, description }) => (
  <li className="experience-item">
    <div className="experience-header">
      <h3>{title}</h3>
      <p className="exp-subtitle">{subtitle}</p>
      <p className="exp-duration">{duration}</p>
    </div>
    <p className="exp-description">{description}</p>
    <hr className="exp-divider" />
  </li>
);

//  Exibe a lista de certificados
const CertificatesSection = ({ certificates }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState(null);

  // Abre o modal
  const openModal = (certificate) => {
    const fileId = certificate.split('/d/')[1]?.split('/')[0];
    setCurrentCertificate(fileId);
    setIsModalOpen(true);
  };

  // Fecha o modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentCertificate(null);
  };

  return (
    <section id="certificates">
      <h2 className="certificates-title">Certificados</h2>
      <hr className="certificates-divider" />
      <ul className="certificates-list">
        {certificates.map((cert, index) => {
          const fileId = cert.pdfLink.split('/d/')[1]?.split('/')[0];
          const thumbnailUrl = `https://drive.google.com/thumbnail?authuser=0&sz=w320&id=${fileId}`;

          return (
            <li key={index} className="certificate-item">
              <div className="certificate-preview" onClick={() => openModal(cert.pdfLink)}>
                <div className="certificate-title">
                  <h3 className="certificate-title-text">{cert.title}</h3>
                </div>
                <img src={thumbnailUrl} alt={`Miniatura de ${cert.title}`} />
              </div>
            </li>
          );
        })}
      </ul>

      {/* Modal que exibe os PDF */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <iframe
              src={`https://drive.google.com/file/d/${currentCertificate}/preview`}
              width="600px"
              height="900px"
              title="Certificado"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

const Experiences = () => {
  const experiencesData = [
    {
      title: 'Desenvolvedor Web - Front-end',
      subtitle: 'ServiceNet - Estágio AYTY',
      duration: 'Abr. de 2022 - Jan. de 2024',
      description:
        'Responsável por desenvolver novas telas para os projetos utilizando Vue.js, solucionar bugs no código, assim como resolver problemas de interface. Além disso, fui responsável por desenvolver componentes utilizando Vue 3 e corrigir ou adicionar elementos de acordo com as exigências do cliente.',
    },
    {
      title: 'Desenvolvedor Web - Full Stack',
      subtitle: 'Universi.me - Projeto Voluntário',
      duration: 'Jan. de 2023 - Dez. de 2023',
      description:
        'Responsável por desenvolver o módulo de capacitação, incluindo os testes, desde o back-end utilizando Spring Boot até o front-end utilizando React e TypeScript. Além disso, contribuí para o desenvolvimento da tela de visualização de currículos e vagas disponíveis.',
    },
    {
      title: 'Desenvolvedor Web - Front-end',
      subtitle: 'Sua Dieta - Projeto Voluntário',
      duration: 'Ago. de 2021 - Dez. de 2021',
      description:
        'Desenvolvimento de telas intuitivas para o cadastro de novas dietas e visualização de dietas previamente criadas. Além disso, redesenhei telas já existentes, como a de login e o menu, para que se alinhassem à identidade do site.',
    },
  ];

  const certificatesData = [
    {
      title: 'Láurea Acadêmica - UFPB',
      pdfLink: 'https://drive.google.com/file/d/18Qs0TL4lyjk9xj5HtYXDl3Rx7VARd0cy/view?usp=sharing',
    },
    {
      title: 'Declaração Projeto de Extensão - UFPB',
      pdfLink: 'https://drive.google.com/file/d/18ZBvUZGMPmt__NeuLedP2DRzSu3Ib8fl/view?usp=sharing',
    },
  ];

  return (
    <section id="experiences">
      <h2 className="experiences-title">Experiências</h2>
      <hr className="experiences-divider" />
      <ul className="experiences-list">
        {experiencesData.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            subtitle={exp.subtitle}
            duration={exp.duration}
            description={exp.description}
          />
        ))}
      </ul>
      <CertificatesSection certificates={certificatesData} />
      <div className="competence">
        <h2 className="competence-title">Competências</h2>
        <hr className="competence-divider"/>
        <h4 className="competence-subtitle">Front-end</h4>
        <p className="competence-text">Java Script | React | Vue.js | Type Script | HTML | CSS | SASS</p>
        <h4 className="competence-subtitle">Back-end</h4>
        <p className="competence-text">Java | Golang | Spring Boot | Testing | SQL | PostgreSQL</p>
        <h4 className="competence-subtitle">Idiomas</h4>
        <p className="competence-text">Inglês e Espanhol</p>
      </div>
    </section>
  );
};

export default Experiences;
