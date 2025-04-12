import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  background: '#f5f5f5',
  text: '#333333',
  primary: '#003262',  // Berkeley Blue
  card: '#ffffff',
  border: '#e0e0e0',
  button: {
    background: '#003262',
    text: '#ffffff',
    hover: '#004785'
  }
};

export const darkTheme = {
  background: '#1a1a1a',
  text: '#ffffff',
  primary: '#3B7EA1',  // Lighter Berkeley Blue for dark mode
  card: '#2d2d2d',
  border: '#404040',
  button: {
    background: '#3B7EA1',
    text: '#ffffff',
    hover: '#4B8EB1'
  }
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
