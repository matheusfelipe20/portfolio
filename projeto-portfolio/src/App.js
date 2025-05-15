import { useState } from "react";
import './App.css';
import './variables/Colors.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import ButtonScroll from './components/buttons/ButtonScroll/ButtonScroll'
import Header from "./pages/home/header/Header";
import Intro from "./pages/home/intro/Intro";
import { LanguageProvider } from "./contexts/languageContext";
import LoadingHome from "./components/loading/LoadingHome";
import About from "./pages/home/about/About";
import PanelAnimated from "./components/panelAnimated/PanelAnimated";
import Contact from "./pages/home/contact/Contact";
import Academic from "./pages/home/academic/Academic";
import Experiences from "./pages/home/experience/Experiences";
import Projects from "./pages/home/project/Projects";
import Certificates from "./pages/home/certificates/Certificates";
import Skills from "./pages/home/skills/Skills";
import Figma from "./pages/home/figma/Figma";

function App() {
  const [loading, setLoading] = useState(true);
  const basename = process.env.REACT_APP_NODE_ENV === "production" ? "/portfolio" : "/";

  return (
    <Router basename={basename}>
      <LanguageProvider>
        {loading ? (
          <LoadingHome onFinish={() => setLoading(false)} />
        ) : (
          <MainContent />
        )}
      </LanguageProvider>
    </Router>
  );
}

const certificatesData = [
  {
    title: 'Láurea Acadêmica - UFPB',
    pdfLink: 'https://drive.google.com/file/d/18Qs0TL4lyjk9xj5HtYXDl3Rx7VARd0cy/view',
  },
  {
    title: 'Declaração Projeto de Extensão - UFPB',
    pdfLink: 'https://drive.google.com/file/d/18ZBvUZGMPmt__NeuLedP2DRzSu3Ib8fl/view',
  },
];

function MainContent() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/" && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-content">
              <ButtonScroll />
              <Intro />
              <About />
              <Academic />
              <Experiences />
              <PanelAnimated />
              <Projects />
              <Figma />
              <Skills />
              <Certificates certificates={certificatesData} />
              <Contact/>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;