import React, { useState } from 'react';
import './Experiences.css';

// Exibe os itens em experiência
const ExperienceItem = ({ title, subtitle, duration, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define o texto a ser exibido, sendo completo ou não
  const displayedText = isExpanded
    ? description
    : description.slice(0, 400) + (description.length > 400 ? '...' : '');

  return (
    <li className="experience-item">
      <div className="experience-header">
        <h3>{title}</h3>
        <p className="exp-subtitle">{subtitle}</p>
        <p className="exp-duration">{duration}</p>
      </div>
      <p className="exp-description">{displayedText}</p>
      {description.length > 400 && (
        <button
          className="exp-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Ver menos' : 'Ver mais'}
        </button>
      )}
      <hr className="exp-divider" />
    </li>
  );
};

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
      <hr className="certificates-divider"/>
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
      subtitle: 'ServiceNet - Estágio',
      duration: 'Abr. de 2022 - Jan. de 2024',
      description:
        'Atuei como desenvolvedor front-end, sendo responsável por projetar e implementar novas telas para projetos utilizando o framework VueJs, com foco em uma experiência de usuário intuitiva e eficiente. ' +
        'Liderei a identificação e resolução de bugs no código, aplicando boas práticas de programação para garantir a robustez e a manutenção das aplicações. ' + 
        'Além disso, desenvolvi componentes reutilizáveis e modulares utilizando Vue 3, otimizando o desempenho e facilitando a escalabilidade dos sistemas. Também fui responsável por modernizar códigos antigos do sistema, migrando-os para Vue 3. ' +
        'Nesse processo, refatorei grande parte da lógica do front-end, substituindo estruturas obsoletas por abordagens mais simples e modernas, alinhadas às melhores práticas do mercado. ' +
        'Por último, colaborei diretamente com clientes e equipes internas para entender e atender às suas demandas, realizando ajustes e implementando novos elementos com base nas necessidades do cliente.'
    },
    {
      title: 'Desenvolvedor Web - Full Stack',
      subtitle: 'Universi.me - Projeto de Extensão Voluntário',
      duration: 'Jan. de 2023 - Maio de 2024',
      description:
      'Fui responsável por desenvolver o módulo de capacitação de forma completa, abrangendo desde a implementação do back-end, utilizando Spring Boot, até o desenvolvimento do front-end com React e TypeScript. No back-end, projetei e implementei APIs robustas para gerenciar dados relacionados a testes, usuários e capacitações, garantindo segurança, eficiência e escalabilidade.' +
      'No front-end, criei interfaces intuitivas e responsivas que facilitaram a experiência dos usuários na realização e gestão de testes.' + 
      'Entre minhas principais contribuições, destaque-se o desenvolvimento da tela de visualização de currículos, onde projetei uma interface funcional e atrativa que permite aos usuários navegar e gerenciar suas informações de forma organizada. Também atuei na criação da funcionalidade de visualização de vagas disponíveis, oferecendo uma navegação clara e intuitiva entre as oportunidades.' + 
      'Além disso, como meu TCC (Trabalho de Conclusão de Curso) fui responsável pela implementação de um gerenciador de armazenamento de arquivos para o módulo de capacitação, utilizando a tecnologia MinIO. Essa solução permitiu o upload, armazenamento e gerenciamento seguro de arquivos, como documentos e certificados, oferecendo alta confiabilidade e performance.'
    },
    {
      title: 'Desenvolvedor Web - Front-end',
      subtitle: 'Sua Dieta - Projeto Acadêmico Voluntário',
      duration: 'Ago. de 2021 - Dez. de 2021',
      description:
        'Participei do desenvolvimento de telas intuitivas voltadas para o cadastro de novas dietas e a visualização de dietas previamente criadas, garantindo que as interfaces fossem funcionais, organizadas e alinhadas às necessidades do projeto. Além disso, realizei o redesenho de telas existentes, como, por exemplo, a de login e o menu, ajustando-as para refletir a identidade visual do site, melhorando a experiência do usuário e promovendo maior consistência estética e funcional.' +
        'Minha participação no projeto foi breve, pois se tratava de um trabalho acadêmico realizado no contexto de uma disciplina universitária. O tempo limitado imposto pela duração da matéria restringiu o meu envolvimento com o projeto, mas permitiu que eu contribuísse de forma significativa no desenvolvimento e refinamento das principais funcionalidades atribuídas à equipe. Mesmo em um curto período, foquei na entrega de soluções de alta qualidade e alinhadas às expectativas do projeto.'
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
        <p className="competence-text">Java Script | React | Vue.js | Type Script | Angular | HTML | CSS | SASS</p>
        <h4 className="competence-subtitle">Back-end</h4>
        <p className="competence-text">Java | Golang | Spring Boot | Testing | SQL | PostgreSQL</p>
        <h4 className="competence-subtitle">Idiomas</h4>
        <div className="competence-idiom">
          <p className="competence-idiom-text">Inglês</p>
          <p className="competence-idiom-description">(Leitura / Escrita)</p>
        </div>
        <div className="competence-idiom">
          <p className="competence-idiom-text">Espanhol</p>
          <p className="competence-idiom-description">(Leitura / Escrita)</p>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
