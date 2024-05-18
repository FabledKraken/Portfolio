import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import backgroundImage from '../assets/Contact_Page.jpg';
import linkedInIcon from '../assets/linkedin-icon.png';
import githubIcon from '../assets/github-icon.png'; 

// Styled component for the contact container
const ContactContainer = styled.div`
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
  box-sizing: border-box;
  color: white; 
  padding: 50px 20px;
  position: relative;
  padding-bottom: 80px;
`;

// Styled component for the title
const Title = styled.h2`
  font-size: 5em;
  margin-bottom: 20px;
  text-align: center;
  color: white; 
  text-decoration: underline;
`;

// Styled component for the content wrapper
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  width: 100%;
  max-width: 1200px; 
  background: rgba(0, 0, 0, 0.7); 
  padding: 40px;
  border-radius: 8px;
`;

// Styled component for the form
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// Styled component for the input fields
const Input = styled.input`
  margin-bottom: 15px;
  padding: 15px;
  font-size: 1.25em;
  border: none;
  border-radius: 4px;
  background: #f9f9f9;
  color: #333;
  font-family: 'Helvetica, sans-serif'; 

  &::placeholder {
    color: #666; 
    opacity: 1; 
    font-style: italic; 
    font-family: 'Helvetica, sans-serif';
  }
`;

// Styled component for the text area
const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 15px;
  font-size: 1.25em;
  border: none;
  border-radius: 4px;
  background: #f9f9f9;
  color: #333;
  resize: none;
  font-family: 'Helvetica, sans-serif';

  &::placeholder {
    color: #666;
    opacity: 1; 
    font-style: italic; 
    font-family: 'Helvetica, sans-serif';
  }
`;

// Styled component for the submit button
const Button = styled.button`
  padding: 15px;
  font-size: 1.25em;
  cursor: pointer;
  background-color: #0f52ba;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0d47a1;
  }
`;

// Styled component for the links container
const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

// Styled component for individual link items
const LinkItem = styled.a`
  margin: 0 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

// Styled component for the icons
const Icon = styled.img`
  width: 40px; 
  height: 40px;
`;

// Styled component for the footer
const Footer = styled.footer`
  position: absolute;
  bottom: 100px;
  width: 100%;
  text-align: center;
  color: #f9f9f9; 
`;

const ContactForm = () => {
  const form = useRef();

  // Function to send email using emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_bqav4ke';
    const templateID = 'template_qg2n5sl';
    const userID = 'RnSvs2SyVyj-2P1ES';
    const userConfirmationTemplateID = 'template_m68g6el';

    const formData = new FormData(form.current);
    const user_email = formData.get('user_email');

    // Send the main email to me from EmailJS with user's info
    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully!', {
          position: "top-right"
        });
        // Send the confirmation email to the user
        emailjs.send(serviceID, userConfirmationTemplateID, {
          user_name: formData.get('user_name'),
          user_email,
          to_email: user_email,
          message: formData.get('message'),
        }, userID)
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
            toast.error('Failed to send the confirmation email, but your message was sent.', {
              position: "top-right"
            });
          });
      }, (error) => {
        console.log(error.text);
        toast.error('Failed to send the message, please try again.', {
          position: "top-right"
        });
      });

    e.target.reset();
  };

  return (
    <ContactContainer>
      <Title>Contact Me</Title>
      <ContentWrapper>
        <Form ref={form} onSubmit={sendEmail}>
          <Input type="text" name="user_name" placeholder="Name" required />
          <Input type="email" name="user_email" placeholder="Email" required />
          <TextArea name="message" placeholder="Message" rows="5" required />
          <Button type="submit">Send</Button>
        </Form>
        <LinksContainer>
          <LinkItem href="https://www.linkedin.com/in/cole-eastlund/" target="_blank" rel="noopener noreferrer">
            <Icon src={linkedInIcon} alt="LinkedIn" />
          </LinkItem>
          <LinkItem href="https://github.com/FabledKraken" target="_blank" rel="noopener noreferrer">
            <Icon src={githubIcon} alt="GitHub" />
          </LinkItem>
        </LinksContainer>
      </ContentWrapper>
      <Footer>
        &copy; {new Date().getFullYear()} Cole Eastlund. All rights reserved.
      </Footer>
      <ToastContainer />
    </ContactContainer>
  );
};

export default ContactForm;
