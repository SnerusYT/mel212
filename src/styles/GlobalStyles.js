// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    background: '#FFF8F0', // A soft, warm off-white
    text: '#4E423F', // A deep, warm brown
    primary: '#E91E63', // A romantic pink/magenta for accents
    secondary: '#FFC107', // A warm gold
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Roboto', sans-serif",
  },
};

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3 {
    font-family: ${theme.fonts.heading};
  }
`;