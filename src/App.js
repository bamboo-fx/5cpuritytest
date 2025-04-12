import React, { useState } from 'react';
import styled from 'styled-components';
import LandingPage from './components/LandingPage';
import QuestionInterface from './components/QuestionInterface';
import ResultsPage from './components/ResultsPage';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
`;

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [score, setScore] = useState(100);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [answers, setAnswers] = useState(new Array(100).fill(false));

  const handleStartTest = () => {
    setCurrentPage('questions');
  };

  const handleComplete = (finalScore, finalAnswers) => {
    setScore(finalScore);
    setAnswers(finalAnswers);
    setCurrentPage('results');
  };

  const handleRetake = () => {
    setScore(100);
    setAnswers(new Array(100).fill(false));
    setCurrentPage('landing');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppContainer>
        <button onClick={toggleTheme} style={{ position: 'absolute', top: '20px', right: '20px' }}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        
        {currentPage === 'landing' && (
          <LandingPage onStart={handleStartTest} />
        )}
        
        {currentPage === 'questions' && (
          <QuestionInterface 
            onComplete={handleComplete}
            answers={answers}
            setAnswers={setAnswers}
          />
        )}
        
        {currentPage === 'results' && (
          <ResultsPage 
            score={score}
            onRetake={handleRetake}
          />
        )}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
