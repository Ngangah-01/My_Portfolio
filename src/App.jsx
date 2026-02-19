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

  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-reveal-section");
    const revealItems = document.querySelectorAll(".scroll-reveal-item");
    if (!sections.length && !revealItems.length) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            itemObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    const revealIfInView = () => {
      revealItems.forEach((item) => {
        if (item.classList.contains("is-visible")) return;
        const rect = item.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
        if (inView) {
          item.classList.add("is-visible");
          itemObserver.unobserve(item);
        }
      });
    };

    sections.forEach((section) => sectionObserver.observe(section));
    revealItems.forEach((item) => itemObserver.observe(item));
    revealIfInView();

    window.addEventListener("scroll", revealIfInView, { passive: true });
    window.addEventListener("resize", revealIfInView);

    return () => {
      sectionObserver.disconnect();
      itemObserver.disconnect();
      window.removeEventListener("scroll", revealIfInView);
      window.removeEventListener("resize", revealIfInView);
    };
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
