import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  text-align: center;
  margin: 40px auto;
  padding: 40px 20px;
  background-color: ${props => props.theme.card};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  color: ${props => props.theme.primary};
  font-weight: bold;
`;

const Description = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 40px;
  color: ${props => props.theme.text};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  p {
    margin-bottom: 20px;
  }
`;

const StartButton = styled.button`
  font-size: 1.2rem;
  padding: 15px 40px;
  background-color: ${props => props.theme.button.background};
  color: ${props => props.theme.button.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.button.hover};
  }
`;

const PrivacyNotice = styled.div`
  margin-top: 30px;
  font-size: 0.9rem;
  color: ${props => props.theme.text};
  opacity: 0.8;
`;

function LandingPage({ onStart }) {
  return (
    <Container>
      <Title>5C Purity Test</Title>
      <Description>
        <p>
          The 5C Purity Test is an unofficial purity test designed to measure your experiences
          at the Claremont Colleges (5Cs), inspired by the Rice Purity Test.
        </p>
        <p>
          Instructions: Check each box if you have done the action described. Your score starts at 100
          and decreases with each item you've done. The lower your score, the more 5C experiences
          you've had!
        </p>
        <p>
          <strong>Note:</strong> This website does not condone illegal activities, and it is strongly
          recommended that you do not aim to complete every item on this list.
        </p>
      </Description>

      <StartButton onClick={onStart}>Start Test</StartButton>

      <PrivacyNotice>
        🔒 This test is completely anonymous. All responses are stored locally and never uploaded.
        We only use anonymous analytics to count total visitors.
      </PrivacyNotice>
    </Container>
  );
}

export default LandingPage;
