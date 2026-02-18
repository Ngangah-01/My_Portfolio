import React, { useEffect } from 'react';
import Header from './components/Header';
import PortfolioHero from './components/PortfolioHero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      history.replaceState(
        null,
        document.title,
        window.location.pathname + window.location.search
      );
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

 return (
    <>
      <Header />
      <PortfolioHero />
      <About />
      <Services/>
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
      {/* Add more sections later */}
    </>
  );
}

export default App;
