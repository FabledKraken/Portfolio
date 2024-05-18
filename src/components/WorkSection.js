import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/Work_Page.jpg';

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

const WorkSection = () => {
  const workExperience = [
    {
      name: 'MARINE CORPS TACTICAL SYSTEMS | SOFTWARE DEVELOPER',
      description: [
        'Developed missile time-on-target plug-ins for Aeronix combat simulation software to improve usability',
        'Designed scripts for creating Variable Message Format message descriptors for Aeronix',
        'Drafted guides for BOSS and Aeronix systems to enhance learning efficiency by minimizing the time required to grasp new concepts'
      ]
    },
    {
      name: 'BOEING | SEAT ELECTRICAL INTEGRATION ENGINEER',
      description: [
        'Collaborated with seat and In-Flight Entertainment suppliers to develop and document electrical system requirements for customer airline seat programs',
        'Validated and ensured seat electrical system designs met operational and functional requirements',
        'Engineered cable raceway drawings using airplane blueprints and calculating lengths of wire needed within a one-meter tolerance'
      ]
    },
    {
      name: 'NASA (JPL) | ROBOTICS SOFTWARE DEVELOPMENT',
      description: [
        'Implemented the A-star algorithm on a robotic arm that is part of the Mars Sample Return Mission (MSR) using the C programming language',
        'Adhered to NASA’s strict coding guidelines and ensured zero memory leaks using Valgrind',
        'Designed algorithm to move the robotic arm within a 5mm radius of the end-point location given, freeing the test engineer\'s time by 2.5 minutes for each test'
      ]
    }
  ];

  return (
    <Section id="work">
      <Title>Work Experience</Title>
      <ContentWrapper>
        {workExperience.map((work, index) => (
          <Description key={index}>
            <Highlight>{work.name}</Highlight>
            <ul>
              {work.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </Description>
        ))}
      </ContentWrapper>
    </Section>
  );
};

export default WorkSection;
