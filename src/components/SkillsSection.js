import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../assets/Skills_Page.jpg';

// Styled component for the section
const Section = styled.section`
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  text-align: center;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

// Styled component for the title
const Title = styled.h2`
  font-size: 5em; 
  font-family: 'Helvetica, sans-serif';
  margin: 0;
  margin-bottom: 20px;
  color: white; 
  text-decoration: underline; 
`;

// Styled component for the content wrapper
const ContentWrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 40px;
  border-radius: 10px;
  max-width: 1200px; 
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
`;

// Styled component for the skills grid
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;
  width: 100%;
  justify-items: center; 
  align-items: center; 
`;

// Styled component for individual skill items
const SkillItem = styled.div`
  font-size: 1.75em; 
  color: white; 
  text-align: center; 
`;

// Styled component for highlighting text
const Highlight = styled.span`
  color: #FFD700; 
`;

// Define the skills with highlighting
const skills = [
  { skill: "C | C# | Objective C | C++", highlight: false },
  { skill: "Python | Java | SQL | Web | Git", highlight: true },
  { skill: "PyTorch | OpenCV | SQLite", highlight: false },
  { skill: "Version Control Repositories", highlight: true },
  { skill: "Embedded Programming/Systems", highlight: false },
  { skill: "Agile & DevOps Methodology", highlight: true },
  { skill: "Machine Learning", highlight: false },
  { skill: "Artificial Intelligence", highlight: true },
  { skill: "Continuous Integration & Development", highlight: false },
  { skill: "Windows, Mac, Linux OS", highlight: true },
  { skill: "Critical Thinking & Problem Solving", highlight: false },
  { skill: "Innovative & Collaborative", highlight: true },
  { skill: "Effective Diverse Leadership", highlight: false },
  { skill: "Organizational Teamwork", highlight: true },
  { skill: "Discipline & Attention to Detail", highlight: false }
];

const SkillsSection = () => {
  return (
    <Section id="skills">
      <Title>Skills</Title>
      <ContentWrapper>
        <SkillsGrid>
          {skills.map((skillItem, index) => (
            <SkillItem key={index}>
              {skillItem.skill.split('|').map((s, i) => (
                <React.Fragment key={i}>
                  {skillItem.highlight ? <Highlight>{s.trim()}</Highlight> : s.trim()}
                  {i < skillItem.skill.split('|').length - 1 && ' | '}
                </React.Fragment>
              ))}
            </SkillItem>
          ))}
        </SkillsGrid>
      </ContentWrapper>
    </Section>
  );
};

export default SkillsSection;
