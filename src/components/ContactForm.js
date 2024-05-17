import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  height: 100vh;
  background: url('/path/to/your/background-image.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
  background: rgba(255, 255, 255, 0.8); // Optional: to make form more readable
  padding: 20px;
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
`;

const ContactForm = () => {
  return (
    <Section id="contact">
      <Form>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <TextArea placeholder="Your Message" />
        <Button type="submit">Send</Button>
      </Form>
    </Section>
  );
};

export default ContactForm;
