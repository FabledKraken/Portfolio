import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/Home_Page.jpg';

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
  color: white; /* Set font color to white */
`;

const Title = styled.h1`
  font-size: 5em; /* Increase font size to 5em */
  font-family: 'Helvetica, sans-serif';
  margin: 0;
  margin-bottom: 20px;
  color: white; /* Set font color to white */
  text-decoration: underline; /* Underline the title */
`;

const ContentWrapper = styled.div`
  background: rgba(0, 0, 0, 0.7); /* Add semi-transparent background for contrast */
  padding: 40px;
  border-radius: 10px;
  max-width: 1200px; /* Limit the width for readability */
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add subtle shadow */
`;

const Description = styled.p`
  font-size: 1.5em; /* Slightly smaller font size */
  font-family: 'Helvetica, sans-serif';
  line-height: 1.6; /* Improve readability */
`;

const Highlight = styled.span`
  color: #FFD700; /* Gold color for highlighting */
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
