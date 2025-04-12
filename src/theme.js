import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  background: '#ffffff',
  text: '#333333',
  primary: '#800000', // Claremont maroon
  secondary: '#FFD700', // Gold
  card: '#f5f5f5',
  border: '#e0e0e0'
};

export const darkTheme = {
  background: '#1a1a1a',
  text: '#ffffff',
  primary: '#a02020', // Lighter maroon for dark mode
  secondary: '#ffd700',
  card: '#2d2d2d',
  border: '#404040'
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    transition: all 0.3s ease;
  }

  button {
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background-color: ${props => props.theme.primary};
    color: white;

    &:hover {
      opacity: 0.9;
      transform: scale(1.02);
    }
  }

  h1, h2, h3 {
    color: ${props => props.theme.primary};
  }
`;
