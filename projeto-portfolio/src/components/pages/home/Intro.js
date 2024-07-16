import React, { useState, useEffect } from 'react';
import './Intro.css'
import ButtonContato from '../../buttons/ButtonSimple/ButtonSimple.js'

const Intro = () => {
  const phrases = ["Transformando ideias em código", "Automatizando o que é repetitivo", "E melhorando o seu negócio...!"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
      }, 13000);
      console.log(phrases.length);

      return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro">
      <div className="text-primary">
        <h1 className="text-intro">Olá, eu sou Matheus</h1>
        <h1 className="animation-intro">_</h1>
      </div>
      <h1 className="text-description">Desenvolvedor Web</h1>
      <p className="text">{'</>'} Full Stack / Java Script {'</>'}</p>
      <div className="div-animation-1">
        <h1 className="h1-animation-1">{">"}</h1>
        <h1 className="animation-intro-1">{phrases[currentPhraseIndex]}</h1>
      </div>
      <ButtonContato width="200px" height="35px" href="#contact" text="Entre em Contato"/>
    </section>
  );
};

export default Intro;
