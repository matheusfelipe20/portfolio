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

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Intro />
        <About />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
