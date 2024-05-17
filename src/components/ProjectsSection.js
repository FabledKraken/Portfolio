import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  height: 100vh;
  background: url('/path/to/your/background-image.jpg') no-repeat center center;
  background-size: cover;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Project = styled.div`
  margin-bottom: 20px;
`;

const ProjectsSection = () => {
  return (
    <Section id="projects">
      <h2>Projects</h2>
      <Project>
        <h3>Project Name 1</h3>
        <p>Description of the project, technologies used, and the problem it solves.</p>
        <a href="http://example.com">View Project</a>
      </Project>
      <Project>
        <h3>Project Name 2</h3>
        <p>Description of the project, technologies used, and the problem it solves.</p>
        <a href="http://example.com">View Project</a>
      </Project>
    </Section>
  );
};

export default ProjectsSection;
