import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../assets/Home_Page.jpg';

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
const Title = styled.h1`
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

// Styled component for the description
const Description = styled.p`
  font-size: 1.5em; 
  font-family: 'Helvetica, sans-serif';
  line-height: 1.6;
`;

// Styled component for highlighting text
const Highlight = styled.span`
  color: #FFD700; 
`;

const IntroSection = () => {
  return (
    <Section>
      <Title>Hello, I'm Cole Eastlund</Title>
      <ContentWrapper>
        <Description>
          I am a dedicated software developer specializing in <Highlight>computer vision</Highlight>, <Highlight>machine learning</Highlight>, and <Highlight>robotics</Highlight>. With experience at renowned organizations including the <Highlight>U.S. Marine Corps</Highlight>, <Highlight>Boeing</Highlight>, and <Highlight>NASA's Jet Propulsion Laboratory</Highlight>, I excel in developing innovative software solutions and leading technical projects.
          <br /><br />
          My technical expertise includes <Highlight>Python</Highlight>, <Highlight>C</Highlight>, <Highlight>PyTorch</Highlight>, <Highlight>OpenCV</Highlight>, and robust project management with <Highlight>Jira</Highlight> and <Highlight>GitLab</Highlight>. Notably, I have designed emotion detection systems to support PTSD patients and individuals with Autism.
          <br /><br />
          I am passionate about leveraging technology to address real-world challenges and drive <Highlight>innovation</Highlight>. Let's connect to explore opportunities for collaboration and growth.
        </Description>
      </ContentWrapper>
    </Section>
  );
};

export default IntroSection;
