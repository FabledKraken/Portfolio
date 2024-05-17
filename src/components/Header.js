import React, { useContext } from 'react';
import styled from 'styled-components';
import { ScrollbarContext } from './SmoothScrollContainer';

const StyledLink = styled.a`
  cursor: pointer;
  color: #AAA9AD;
  text-decoration: none;
  padding: 10px 15px;
  transition: color 0.3s ease;

  &:hover, &:focus {
    color: #ccc;
  }

  &:active {
    color: #aaa;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #0f52ba;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Logo = styled.div`
  flex-grow: 0;
  cursor: pointer;
`;

const Header = () => {
  const scrollbar = useContext(ScrollbarContext);

  const handleNavigation = (targetId) => (event) => {
    event.preventDefault();
    const element = document.querySelector(targetId);
    if (element && scrollbar) {
      console.log("Scrolling to:", element);
      scrollbar.scrollIntoView(element);
    } else {
      console.error("Scrollbar instance not found or element not found:", { scrollbar, element });
    }
  };

  return (
    <HeaderContainer>
      <Logo>Logo</Logo>
      <StyledHeader>
        <StyledLink onClick={handleNavigation('#intro')}>Home</StyledLink>
        <StyledLink onClick={handleNavigation('#skills')}>Skills</StyledLink>
        <StyledLink onClick={handleNavigation('#projects')}>Projects</StyledLink>
        <StyledLink onClick={handleNavigation('#work')}>Work</StyledLink>
        <StyledLink onClick={handleNavigation('#contact')}>Contact</StyledLink>
      </StyledHeader>
    </HeaderContainer>
  );
};

export default Header;
