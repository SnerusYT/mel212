// src/components/MemoryCard.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Flipbook from './Flipbook';
import { FaMapMarkerAlt, FaCopy } from 'react-icons/fa';

const Card = styled(motion.div)`
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const LocationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const LocationText = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MemoryCard = ({ memory }) => {
  const handleCopy = () => {
    const coords = `${memory.coordinates[0]}, ${memory.coordinates[1]}`;
    navigator.clipboard.writeText(coords);
    alert('Coordinates copied to clipboard!');
  };

  return (
    <Card>
      <CardImage src={memory.mainImage} alt={memory.location} loading="lazy" />
      <CardContent>
        <LocationHeader>
          <LocationText>
            <FaMapMarkerAlt />
            {memory.location}
          </LocationText>
          <CopyButton onClick={handleCopy}>
            <FaCopy />
          </CopyButton>
        </LocationHeader>
        <Flipbook pages={memory.flipbook} />
      </CardContent>
    </Card>
  );
};

export default MemoryCard;