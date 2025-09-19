// src/components/Flipbook.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FlipbookContainer = styled.div`
  position: relative;
  height: 200px;
  background-color: #f9f9f9;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 1rem;
`;

const Page = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 4px;
  }
  
  p {
    font-style: italic;
    text-align: center;
    padding: 1rem;
    color: #555;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  
  &.left {
    left: 10px;
  }
  
  &.right {
    right: 10px;
  }
`;

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const Flipbook = ({ pages }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  
  const pageIndex = ((page % pages.length) + pages.length) % pages.length;

  return (
    <FlipbookContainer>
      <AnimatePresence initial={false} custom={direction}>
        <Page
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          {pages[pageIndex].type === 'image' ? (
            <img src={pages[pageIndex].content} alt="Memory" />
          ) : (
            <p>"{pages[pageIndex].content}"</p>
          )}
        </Page>
      </AnimatePresence>
      {pages.length > 1 && (
        <>
          <NavButton className="left" onClick={() => paginate(-1)}><FaChevronLeft /></NavButton>
          <NavButton className="right" onClick={() => paginate(1)}><FaChevronRight /></NavButton>
        </>
      )}
    </FlipbookContainer>
  );
};

export default Flipbook;