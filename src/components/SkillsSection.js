import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  height: 100vh;
  background: url('/path/to/your/background-image.jpg') no-repeat center center;
  background-size: cover;
  text-align: center;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SkillsSection = () => {
  return (
    <Section id="skills">
      <h2>Skills & Expertise</h2>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>SQL & NoSQL Databases</li>
      </ul>
    </Section>
  );
};

export default SkillsSection;
