// src/components/LandingScreen.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeartButton from './HeartButton';

const LandingContainer = styled(motion.section)`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #FFDDE1, #EE9CA7);
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  color: white;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.2);
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
    padding: 0 1rem;
  }
`;

const LandingScreen = ({ onHeartClick }) => {
  return (
    <LandingContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Eu amo-te meu amor Mélanie
      </Title>
      <HeartButton onClick={onHeartClick} />
    </LandingContainer>
  );
};

export default LandingScreen;