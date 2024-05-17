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

const IntroSection = () => {
  return (
    <Section id="intro">
      <h1>Hello, I'm Cole Eastlund</h1>
      <p>Welcome to my personal portfolio. I'm a software engineer specializing in Artificial Intelligence and Machine Learning. Here's a showcase of my projects and skills.</p>
    </Section>
  );
};

export default IntroSection;
