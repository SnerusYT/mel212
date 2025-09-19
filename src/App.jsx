// src/App.jsx
import React, { useRef, Suspense, lazy } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles/GlobalStyles';
import LandingScreen from './components/LandingScreen';

// Lazy load the heavier components with corrected RELATIVE paths
const MemoriesSection = lazy(() => import('./components/MemoriesSection'));
const VideosSection = lazy(() => import('./components/VideosSection'));

const AppContainer = styled.main`
  /* The main container for your app */
`;

const Loader = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

function App() {
  const memoriesRef = useRef(null);

  const handleScrollToMemories = () => {
    memoriesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <LandingScreen onHeartClick={handleScrollToMemories} />
        
        <Suspense fallback={<Loader>Loading our memories...</Loader>}>
          <MemoriesSection ref={memoriesRef} />
          <VideosSection />
        </Suspense>

      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
