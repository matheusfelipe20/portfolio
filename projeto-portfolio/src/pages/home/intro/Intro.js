import React from 'react';
import './Intro.css';
import LanguageSelector from '../../../components/language/LanguageSelector';

import imageIntro from '../../../assets/img/photo-intro.png';

import linkedinIcon from '../../../assets/icon/iconLinkedin.svg';
import instagramIcon from '../../../assets/icon/iconInstagram.svg';
import githubIcon from '../../../assets/icon/iconGithub.svg';
import useTexts from '../../../hooks/useTexts';
import ButtonSimple from '../../../components/buttons/ButtonSimple/ButtonSimple';
import SocialButton from '../../../components/buttons/SocialButton/SocialButton';


const Intro = () => {
    const texts = useTexts();

    return (
        <section className="section-intro" id="intro">
            <div className="intro-content">
                <div className="panel-intro">
                    <div className="left-intro">
                      <h1 className="text-name-intro">{texts.InitialText_Intro}</h1>
                      <h2 className="text-profissional-intro">{texts.ProfessionText_Intro}</h2>
                      <p className="text-intro-description">{texts.Description_Intro}</p>
                      <div className="redeSocial-intro">
                        <SocialButton height={"40px"} width={"40px"} icon={githubIcon} alt="Botão Perfil no Github" href="https://github.com/matheusfelipe20"/>
                        <SocialButton height={"40px"} width={"40px"} icon={linkedinIcon} alt="Botão Perfil no Linkedin" href="https://www.linkedin.com/in/matheus-felipe-30a6b8206/"/>
                        <SocialButton height={"40px"} width={"40px"} icon={instagramIcon} alt="Botão Perfil no Instagram" href="https://www.instagram.com/felipe_2012matheus?igsh=MWx0ZmdmbXc1ODYyNQ=="/>
                      </div>
                      <ButtonSimple href="#contact" height="60px" text={texts.ButtonContact_Intro} alt="Botão de Contato"/>
                    </div>
                    <div className="right-intro">
                      <div className="languageSelector-intro">
                        <LanguageSelector/>
                      </div>
                      <div className="image-intro">
                        <div className="circle-background">
                          <img
                            className="foreground-image" src={imageIntro} alt="Imagem de Introdução"
                          />
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;