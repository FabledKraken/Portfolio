import React, { createContext, useRef, useEffect, useState } from 'react';
import Scrollbar from 'smooth-scrollbar';
import styled from 'styled-components';

export const ScrollbarContext = createContext(null);

const ScrollContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const SmoothScrollContainer = ({ children }) => {
  const scrollRef = useRef(null);
  const [scrollbar, setScrollbar] = useState(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollbarInstance = Scrollbar.init(scrollRef.current, {
        damping: 0.1,
        thumbMinSize: 20,
        renderByPixels: true,
        alwaysShowTracks: false,
        continuousScrolling: true,
      });

      setScrollbar(scrollbarInstance);

      return () => {
        scrollbarInstance.destroy();
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
