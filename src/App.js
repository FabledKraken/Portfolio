import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import WorkSection from './components/WorkSection';
import ContactForm from './components/ContactForm';
import { Element, scroller } from 'react-scroll';

function App() {
  const sections = ['intro', 'skills', 'projects', 'work', 'contact'];

  const handleScroll = (direction) => {
    let currentSectionIndex;

    for (let i = 0; i < sections.length; i++) {
      const element = document.getElementById(sections[i]);
      if (element && element.getBoundingClientRect().top >= 0) {
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
      smooth: 'easeInOutQuart',
      offset: -70, // Adjust this value if you have a fixed header
    });
  };

  const handleWheel = (event) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? 'down' : 'up';
    handleScroll(direction);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      const direction = event.key === 'ArrowDown' ? 'down' : 'up';
      handleScroll(direction);
    }
  };

  useEffect(() => {
    const handleWheelEvent = (event) => handleWheel(event);
    window.addEventListener('wheel', handleWheelEvent, { passive: false });

    const handleKeyDownEvent = (event) => handleKeyDown(event);
    window.addEventListener('keydown', handleKeyDownEvent);

    return () => {
      window.removeEventListener('wheel', handleWheelEvent);
      window.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Element name="intro" id="intro">
          <IntroSection
            titleFontSize="4em"
            titleFontFamily="Helvetica, sans-serif"
            descriptionFontSize="2em"
            descriptionFontFamily="Helvetica, sans-serif"
          />
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
    </div>
  );
}

export default App;
