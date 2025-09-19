// src/components/MemoriesSection.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import InteractiveMap from './InteractiveMap';
import MemoryCard from './MemoryCard';
import { memories } from '../data/memories';

const SectionContainer = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const MapContainer = styled.div`
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);

  @media (min-width: 1024px) {
    position: sticky;
    top: 2rem;
    height: 80vh; /* La carte est plus haute sur PC */
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MemoriesSection = React.forwardRef((props, ref) => {
  return (
    <SectionContainer ref={ref}>
      <SectionTitle>Nos Dates</SectionTitle>
      <ContentLayout>
        <MapContainer>
          <InteractiveMap locations={memories} />
        </MapContainer>
        <Gallery>
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <MemoryCard memory={memory} />
            </motion.div>
          ))}
        </Gallery>
      </ContentLayout>
    </SectionContainer>
  );
});

export default MemoriesSection;