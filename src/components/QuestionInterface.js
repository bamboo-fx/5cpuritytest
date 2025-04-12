import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { questions } from '../data/questions';

const Container = styled.div`
  max-width: 800px;
  width: 100%;
`;

const CategorySection = styled.div`
  margin-bottom: 30px;
  background-color: ${props => props.theme.card};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h2`
  color: ${props => props.theme.primary};
  margin-bottom: 15px;
`;

const QuestionItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.border};
  }
`;

const Checkbox = styled.input`
  margin-right: 15px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${props => props.theme.border};
  border-radius: 5px;
  margin: 20px 0;
  position: sticky;
  top: 20px;
`;

const Progress = styled.div`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: ${props => props.theme.primary};
  border-radius: 5px;
  transition: width 0.3s ease;
`;

const CompleteButton = styled.button`
  position: sticky;
  bottom: 20px;
  width: 100%;
  padding: 15px;
  font-size: 1.2rem;
  margin-top: 20px;
`;

const Score = styled.div`
  position: sticky;
  top: 40px;
  background-color: ${props => props.theme.primary};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  margin: 10px 0;
  font-size: 1.2rem;
`;

function QuestionInterface({ onComplete, answers, setAnswers }) {
  const [currentScore, setCurrentScore] = useState(100);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate progress
    const checkedCount = answers.filter(answer => answer).length;
    setProgress((checkedCount / answers.length) * 100);
    setCurrentScore(100 - checkedCount);
  }, [answers]);

  const handleCheckbox = (categoryIndex, questionIndex) => {
    const globalIndex = categoryIndex * 10 + questionIndex;
    const newAnswers = [...answers];
    newAnswers[globalIndex] = !newAnswers[globalIndex];
    setAnswers(newAnswers);
  };

  const handleComplete = () => {
    onComplete(currentScore, answers);
  };

  return (
    <Container>
      <ProgressBar>
        <Progress progress={progress} />
      </ProgressBar>
      <Score>Current Score: {currentScore}</Score>

      {questions.map((category, categoryIndex) => (
        <CategorySection key={category.category}>
          <CategoryTitle>{category.category}</CategoryTitle>
          {category.items.map((question, questionIndex) => (
            <QuestionItem key={questionIndex}>
              <Checkbox
                type="checkbox"
                checked={answers[categoryIndex * 10 + questionIndex]}
                onChange={() => handleCheckbox(categoryIndex, questionIndex)}
              />
              {question}
            </QuestionItem>
          ))}
        </CategorySection>
      ))}

      <CompleteButton onClick={handleComplete}>
        Complete Test
      </CompleteButton>
    </Container>
  );
}

export default QuestionInterface;
