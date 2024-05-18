import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink, scroller } from 'react-scroll';

// Styled component for navigation links
const StyledLink = styled(ScrollLink)`
  cursor: pointer;
  color: #AAA9AD;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 1em;
  transition: color 0.3s ease, font-size 0.3s ease;

  &:hover, &:focus, &.active {
    font-size: 1.5em;
    color: white;
  }

  &:hover {
    color: #ccc;
  }

  &:active {
    color: #aaa;
  }
`;

// Styled component for the header container
const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

// Styled component for the navigation bar
const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Header = () => {
  // Handle navigation click
  const handleNavigation = (targetId) => (event) => {
    event.preventDefault();
    scroller.scrollTo(targetId.substring(1), {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -70, // Offset for the header
    });
  };

  return (
    <HeaderContainer>
      <StyledHeader>
        <StyledLink to="intro" spy={true} smooth={true} duration={800} offset={-70} activeClass="active">Home</StyledLink>
        <StyledLink to="skills" spy={true} smooth={true} duration={800} offset={-70} activeClass="active">Skills</StyledLink>
        <StyledLink to="projects" spy={true} smooth={true} duration={800} offset={-70} activeClass="active">Projects</StyledLink>
        <StyledLink to="work" spy={true} smooth={true} duration={800} offset={-70} activeClass="active">Work</StyledLink>
        <StyledLink to="contact" spy={true} smooth={true} duration={800} offset={-70} activeClass="active">Contact</StyledLink>
      </StyledHeader>
    </HeaderContainer>
  );
};

export default Header;
