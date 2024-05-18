import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from '../assets/Contact_Page.jpg';
import linkedInIcon from '../assets/linkedin-icon.png'; // Add your LinkedIn icon here
import githubIcon from '../assets/github-icon.png'; // Add your GitHub icon here

const ContactContainer = styled.div`
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ensure it takes the full viewport height */
  box-sizing: border-box;
  color: white; /* Set font color to white */
  padding: 50px 20px;
  position: relative;
  padding-bottom: 80px; /* Add padding to avoid overlap with footer */
`;

const Title = styled.h2`
  font-size: 5em; /* Increase font size to 5em */
  margin-bottom: 20px;
  text-align: center;
  color: white; /* Light grey color for the title */
  text-decoration: underline; /* Underline the title */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  width: 100%;
  max-width: 1200px; /* Adjust as needed */
  background: rgba(0, 0, 0, 0.7); /* Add a semi-transparent background for contrast */
  padding: 40px;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 15px;
  font-size: 1.25em;
  border: none;
  border-radius: 4px;
  background: #f9f9f9;
  color: #333;
  font-family: 'Helvetica, sans-serif'; /* Ensure consistent font family */

  &::placeholder {
    color: #666; /* Change placeholder text color */
    opacity: 1; /* Override default opacity */
    font-style: italic; /* Italicize placeholder text */
    font-family: 'Helvetica, sans-serif'; /* Ensure consistent font family */
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 15px;
  font-size: 1.25em;
  border: none;
  border-radius: 4px;
  background: #f9f9f9;
  color: #333;
  resize: none;
  font-family: 'Helvetica, sans-serif'; /* Ensure consistent font family */

  &::placeholder {
    color: #666; /* Change placeholder text color */
    opacity: 1; /* Override default opacity */
    font-style: italic; /* Italicize placeholder text */
    font-family: 'Helvetica, sans-serif'; /* Ensure consistent font family */
  }
`;

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

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const LinkItem = styled.a`
  margin: 0 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Icon = styled.img`
  width: 40px; /* Adjust the size as needed */
  height: 40px;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 100px;
  width: 100%;
  text-align: center;
  color: #f9f9f9; /* Light grey color for the footer text */
`;

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_bqav4ke';
    const templateID = 'template_qg2n5sl';
    const userID = 'RnSvs2SyVyj-2P1ES';
    const userConfirmationTemplateID = 'template_m68g6el';

    const formData = new FormData(form.current);
    const user_email = formData.get('user_email');

    // Send the main email
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
