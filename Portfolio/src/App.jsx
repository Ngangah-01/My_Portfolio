import PortfolioHero from './components/PortfolioHero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
 return (
    <>
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