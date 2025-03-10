import React from 'react';
import './App.css';
import './variables/Colors.css'
import Header from './components/pages/home/Header';
import Intro from './components/pages/home/Intro';
import About from './components/pages/home/About';
import Projects from './components/pages/home/Projects';
import Contact from './components/pages/home/Contact';
import Footer from './components/pages/home/Footer';
import Experiences from './components/pages/home/Experiences';
import Academic from './components/pages/home/Academic';
import ButtonScroll from './components/buttons/ButtonScroll/ButtonScroll';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <ButtonScroll />
        <Intro />
        <About />
        <Academic />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
