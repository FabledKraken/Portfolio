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

const Work = styled.div`
  margin-bottom: 20px;
`;

const WorkSection = () => {
  return (
    <Section id="work">
      <h2>Work</h2>
      <Work>
        <h3>Work Name 1</h3>
        <p>Description of the work experience I have.</p>
        <a href="http://example.com">View Work</a>
      </Work>
      <Work>
        <h3>Work Name 2</h3>
        <p>Description of the work experience I have.</p>
        <a href="http://example.com">View Work</a>
      </Work>
    </Section>
  );
};

export default WorkSection;
