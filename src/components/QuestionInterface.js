import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { questions } from '../data/questions';

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.background};
  padding: 20px 0;
  z-index: 100;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${props => props.theme.border};
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: ${props => props.theme.button.background};
  transition: width 0.3s ease;
`;

const Score = styled.div`
  margin-top: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
  text-align: center;
`;

const QuestionList = styled.div`
  margin-top: 30px;
  margin-bottom: 100px;
`;

const QuestionItem = styled.label`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  margin: 8px 0;
  background-color: ${props => props.theme.card};
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Checkbox = styled.input`
  margin-right: 15px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const QuestionText = styled.span`
  font-size: 1.1rem;
  color: ${props => props.theme.text};
  user-select: none;
`;

const CompleteButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 40px;
  font-size: 1.2rem;
  background-color: ${props => props.theme.button.background};
  color: ${props => props.theme.button.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${props => props.theme.button.hover};
  }
`;

function QuestionInterface({ onComplete, answers, setAnswers }) {
  const [currentScore, setCurrentScore] = useState(100);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const checkedCount = answers.filter(answer => answer).length;
    setProgress((checkedCount / answers.length) * 100);
    setCurrentScore(100 - checkedCount);
  }, [answers]);

  const handleCheckbox = (index) => {
    const newAnswers = [...answers];
    newAnswers[index] = !newAnswers[index];
    setAnswers(newAnswers);
  };

  const handleComplete = () => {
    onComplete(currentScore, answers);
  };

  return (
    <Container>
      <Header>
        <ProgressBar>
          <Progress progress={progress} />
        </ProgressBar>
        <Score>Score: {currentScore}</Score>
      </Header>

      <QuestionList>
        {questions.map((question, index) => (
          <QuestionItem key={index}>
            <Checkbox
              type="checkbox"
              checked={answers[index]}
              onChange={() => handleCheckbox(index)}
            />
            <QuestionText>
              {question}
            </QuestionText>
          </QuestionItem>
        ))}
      </QuestionList>

      <CompleteButton onClick={handleComplete}>
        Complete Test
      </CompleteButton>
    </Container>
  );
}

export default QuestionInterface;
