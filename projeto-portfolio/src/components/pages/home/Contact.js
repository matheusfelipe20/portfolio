import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

import SocialButton from '../../buttons/SocialButton/SocialButton';
import linkedinIcon from '../../../icons/linkedin-white.svg';
import githubIcon from '../../../icons/github-white.svg';
import instaIcon from '../../../icons/instagram-white.svg';
import perfilImage from '../../../img/photo-perfil.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar e-mail usando o EmailJS
    emailjs
      .sendForm('service_ez4e87c', 'template_20c9ozq', e.target, 'KQo6Nl7ZzOcx4KTEZ')
      .then((result) => {
        console.log('Email enviado com sucesso:', result.text);
        alert('Mensagem enviada com sucesso!');
      })
      .catch((error) => {
        console.log('Erro ao enviar e-mail:', error.text);
        alert('Ocorreu um erro. Tente novamente mais tarde.');
      });

    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact">
      <h2>Contato</h2>
      <hr className="divider-contact" />
      <div className="panel-contact">
        <div className="contact-body">
          <div className="contact-left">
            <img src= {perfilImage} alt="Foto de perfil" className="contact-image"/>
            <div className="contact-social">
              <SocialButton height={"28px"} width={"28px"} icon={linkedinIcon} alt="Perfil Linkedin" href="https://www.linkedin.com/in/matheus-felipe-bandeira-oliveira-30a6b8206/" />
              <SocialButton height={"28px"} width={"28px"} icon={githubIcon} alt="Perfil Github" href="https://github.com/matheusfelipe20" />
              <SocialButton height={"28px"} width={"28px"} icon={instaIcon} alt="Perfil Instagram" href="https://www.instagram.com/felipe_2012matheus?igsh=MWx0ZmdmbXc1ODYyNQ==" />
            </div>
            <div className="contact-email">
              <p className="contact-email-p">Email para Contato</p>
              <p>matheus.mf.dev@gmail.com</p>
              <button className="copy-button" onClick={() => navigator.clipboard.writeText("matheus.mf.dev@gmail.com")}>
                Copiar Email
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <h3 className="title-form">Entre em contato</h3>
            <label htmlFor="name">Nome:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="input-contact"
            />

            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="input-contact"
            />

            <label htmlFor="subject">Assunto:</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              required
              className="input-contact" 
            />

            <label htmlFor="message">Mensagem:</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required
              className="input-contact" 
            />

            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
