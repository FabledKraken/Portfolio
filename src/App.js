import React from 'react';
import './App.css';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import WorkSection from './components/WorkSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Element, scroller } from 'react-scroll';

function App() {
  const sections = ['intro', 'skills', 'projects', 'work', 'contact'];

  const handleWheel = (event) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? 'down' : 'up';
    let currentSectionIndex;

    for (let i = 0; i < sections.length; i++) {
      const element = document.getElementById(sections[i]);
      if (element.getBoundingClientRect().top >= 0) {
        currentSectionIndex = i;
        break;
      }
    }

    let nextSectionIndex;
    if (direction === 'down') {
      nextSectionIndex = currentSectionIndex + 1;
      if (nextSectionIndex >= sections.length) return;
    } else {
      nextSectionIndex = currentSectionIndex - 1;
      if (nextSectionIndex < 0) return;
    }

    scroller.scrollTo(sections[nextSectionIndex], {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className="App" onWheel={handleWheel}>
      <Header />
      <main>
        <Element name="intro" id="intro">
          <IntroSection />
        </Element>
        <Element name="skills" id="skills">
          <SkillsSection />
        </Element>
        <Element name="projects" id="projects">
          <ProjectsSection />
        </Element>
        <Element name="work" id="work">
          <WorkSection />
        </Element>
        <Element name="contact" id="contact">
          <ContactForm />
        </Element>
      </main>
      <Footer />
    </div>
  );
}

export default App;