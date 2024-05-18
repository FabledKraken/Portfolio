import React, { createContext, useRef, useEffect, useState } from 'react';
import Scrollbar from 'smooth-scrollbar';
import styled from 'styled-components';

// Create a context for the scrollbar instance
export const ScrollbarContext = createContext(null);

// Styled component for the scroll container
const ScrollContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const SmoothScrollContainer = ({ children }) => {
  const scrollRef = useRef(null); // Reference for the scroll container
  const [scrollbar, setScrollbar] = useState(null); // State for the scrollbar instance

  useEffect(() => {
    if (scrollRef.current) {
      // Initialize the smooth scrollbar
      const scrollbarInstance = Scrollbar.init(scrollRef.current, {
        damping: 0.1,
        thumbMinSize: 20,
        renderByPixels: true,
        alwaysShowTracks: false,
        continuousScrolling: true,
      });

      setScrollbar(scrollbarInstance);

      return () => {
        scrollbarInstance.destroy(); // Cleanup the scrollbar instance on unmount
      };
    }
  }, []);

  return (
    <ScrollbarContext.Provider value={scrollbar}>
      <ScrollContainer ref={scrollRef}>
        {children}
      </ScrollContainer>
    </ScrollbarContext.Provider>
  );
};

export default SmoothScrollContainer;
