import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../assets/Projects_Page.jpg';
import googleDriveIcon from '../assets/Google_Drive_Logo.png';

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

// Styled component for the description
const Description = styled.p`
  font-size: 1.5em; 
  font-family: 'Helvetica, sans-serif';
  line-height: 1.6; 
  text-align: left;
`;

// Styled component for highlighting text
const Highlight = styled.span`
  color: #FFD700;
`;

// Styled component for Google Drive link
const GoogleDriveLink = styled.a`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Styled component for the Google Drive icon
const Icon = styled.img`
  width: 60px; // Adjust the size as needed
  height: 60px;
  margin-left: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProjectsSection = () => {
  return (
    <Section id="projects">
      <Title>Projects</Title>
      <ContentWrapper>
        <Description>
          <Highlight>Emotion Detection Computer Vision</Highlight> – Designed a computer vision system that uses <Highlight>Machine Learning</Highlight> to understand the emotions displayed.
          <br /><br />
          Used <Highlight>Python</Highlight> programming language, <Highlight>PyTorch</Highlight> and <Highlight>SciKit Learn</Highlight> for Machine Learning, <Highlight>OpenCV</Highlight> for computer vision, <Highlight>Jira</Highlight> for project management, and <Highlight>GitLab</Highlight> for Continuous Integration.
          <br /><br />
          Aimed to help PTSD patients and those with Autism.
        </Description>
      </ContentWrapper>
      <GoogleDriveLink href="https://drive.google.com/drive/folders/1_d9B0W6LUhPk4AL6HLYCLd3LqhAJ1qh9?usp=sharing" target="_blank" rel="noopener noreferrer">
        <Icon src={googleDriveIcon} alt="Google Drive" />
      </GoogleDriveLink>
    </Section>
  );
};

export default ProjectsSection;
