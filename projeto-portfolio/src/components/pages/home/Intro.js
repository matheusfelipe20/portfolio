import React, { useState, useEffect } from 'react';
import './Intro.css'
import ButtonContato from '../../buttons/ButtonSimple/ButtonSimple.js'

const Intro = () => {
  const phrases = ["Transformando ideias em código..."];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showText, setShowText] = useState(true);
  
  //Animação de digitação
  useEffect(() => {
    const displayInterval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setShowText(true);
      }, 3000); // Tempo para apagar
    }, 10000); // Tempo total de cada animação (exibição + apagar)
  
    return () => clearInterval(displayInterval);
  }, [phrases.length]);
  

  return (
    <section className="intro-section" id="intro">
      <div className="text-primary">
        <h1 className="text-intro">Olá, me chamo Matheus</h1>
        <h1 className="animation-intro">_</h1>
      </div>
      <h1 className="text-description">Desenvolvedor de Software</h1>
      <p className="text">{'</>'} Back end {'</>'}</p>
      <div className="div-animation-1">
        <h1 className="h1-animation-1">{">"}</h1>
        <h1 className={`animation-intro-1 ${showText ? "typing" : "erasing"}`}>
          {phrases[currentPhraseIndex]}
        </h1>
      </div>
      <ButtonContato height="55px" href="#contact" text="Entre em Contato"/>
    </section>
  );
};

export default Intro;
