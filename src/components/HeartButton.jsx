// src/components/HeartButton.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const ButtonWrapper = styled.div`
  position: relative;
`;

const StyledButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);

  svg {
    color: white;
    font-size: 2.5rem;
  }
`;

const HeartParticle = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  color: ${({ theme }) => theme.colors.primary};
`;

const HeartButton = ({ onClick }) => {
  const [particles, setParticles] = useState([]);

  const handleClick = () => {
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i + Date.now(),
      x: (Math.random() - 0.5) * 300,
      y: (Math.random() - 0.5) * 300,
      scale: Math.random() * 0.5 + 0.5,
      opacity: 1,
    }));
    setParticles(newParticles);
    onClick();
  };

  return (
    <ButtonWrapper>
      <StyledButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
      >
        <FaHeart />
      </StyledButton>
      <AnimatePresence>
        {particles.map((p) => (
          <HeartParticle
            key={p.id}
            initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
            animate={{
              x: p.x,
              y: -200 + p.y,
              scale: p.scale,
              opacity: 0,
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            onAnimationComplete={() => setParticles(prev => prev.filter(item => item.id !== p.id))}
          >
            <FaHeart />
          </HeartParticle>
        ))}
      </AnimatePresence>
    </ButtonWrapper>
  );
};

export default HeartButton;