import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/Projects_Page.jpg';
import googleDriveIcon from '../assets/Google_Drive_Logo.png'; // Import the Google Drive icon

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

const Title = styled.h2`
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
  text-align: left;
`;

const Highlight = styled.span`
  color: #FFD700; /* Gold color for highlighting */
`;

const GoogleDriveLink = styled.a`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 60px; /* Adjust the size as needed */
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
      <GoogleDriveLink href="https://drive.google.com/drive/folders/1ys8RwtIt3z0g6ACqr6whnKqnUPiarvvw?usp=sharing" target="_blank" rel="noopener noreferrer">
        <Icon src={googleDriveIcon} alt="Google Drive" />
      </GoogleDriveLink>
    </Section>
  );
};

export default ProjectsSection;
