import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LandingPage from './components/LandingPage';
import QuestionInterface from './components/QuestionInterface';
import ResultsPage from './components/ResultsPage';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import ReactGA from 'react-ga4';

// Initialize GA4 with your measurement ID
ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your actual GA4 measurement ID

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

  useEffect(() => {
    // Track page views
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const handleStartTest = () => {
    setCurrentPage('questions');
    // Track when users start the test
    ReactGA.event({
      category: "User Interaction",
      action: "Started Test"
    });
  };

  const handleComplete = (finalScore, finalAnswers) => {
    setScore(finalScore);
    setAnswers(finalAnswers);
    setCurrentPage('results');
    // Track test completion and score
    ReactGA.event({
      category: "User Interaction",
      action: "Completed Test",
      label: "Final Score",
      value: finalScore
    });
  };

  const handleRetake = () => {
    setScore(100);
    setAnswers(new Array(100).fill(false));
    setCurrentPage('landing');
    // Track test retakes
    ReactGA.event({
      category: "User Interaction",
      action: "Retake Test"
    });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Track theme changes
    ReactGA.event({
      category: "User Preference",
      action: "Toggle Theme",
      label: isDarkMode ? "Light Mode" : "Dark Mode"
    });
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
