// src/components/VideosSection.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { videos } from '../data/videos';
import { FaPlay } from 'react-icons/fa';

const Section = styled.section`
  padding: 4rem 1rem;
  background: #EEDDCC; // A slightly different warm tone
`;

const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const VideoCard = styled(motion.div)`
  cursor: pointer;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  ${VideoCard}:hover & {
    transform: scale(1.05);
  }
`;

const PlayIconOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 3rem;
  color: white;
  ${VideoCard}:hover & {
    opacity: 1;
  }
`;

const VideoInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  color: white;

  h3 {
    font-size: 1.2rem;
    font-family: ${({ theme }) => theme.fonts.heading};
  }
`;

// Lightbox Styles
const LightboxBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const LightboxContent = styled(motion.div)`
  width: 90%;
  max-width: 900px;
  
  video {
    width: 100%;
    border-radius: 10px;
  }
`;

const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Section>
      <Title>Les ptiiiiits vidéos</Title>
      <VideoGrid>
        {videos.map(video => (
          <VideoCard 
            key={video.id} 
            onClick={() => setSelectedVideo(video)}
            layoutId={`video-card-${video.id}`}
          >
            <Thumbnail src={video.thumbnail} alt={video.title} />
            <PlayIconOverlay><FaPlay /></PlayIconOverlay>
            <VideoInfo>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </VideoInfo>
          </VideoCard>
        ))}
      </VideoGrid>
      
      <AnimatePresence>
        {selectedVideo && (
          <LightboxBackdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <LightboxContent layoutId={`video-card-${selectedVideo.id}`}>
              <video src={selectedVideo.videoSrc} controls autoPlay />
            </LightboxContent>
          </LightboxBackdrop>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default VideosSection;