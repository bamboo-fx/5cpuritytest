import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  text-align: center;
  padding: 40px;
  background-color: ${props => props.theme.card};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${props => props.theme.primary};
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const Disclaimer = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 20px;
`;

const StartButton = styled.button`
  font-size: 1.2rem;
  padding: 15px 30px;
  margin-top: 20px;
`;

function LandingPage({ onStart }) {
  return (
    <Container>
      <Title>5C Purity Test</Title>
      <Description>
        Welcome to the Claremont Colleges Purity Test! This test measures your experiences
        across the 5Cs - Pomona, Scripps, CMC, Harvey Mudd, and Pitzer. From academic adventures
        to social traditions, see how many quintessential 5C experiences you've had!
      </Description>
      <Description>
        Answer honestly about your experiences at the Claremont Colleges. Your score starts at 100
        and decreases with each item you've done. The lower your score, the more 5C experiences
        you've had!
      </Description>
      <StartButton onClick={onStart}>Start Test</StartButton>
      <Disclaimer>
        Note: This test is for entertainment purposes only. All responses are stored locally
        and not shared with any third parties.
      </Disclaimer>
    </Container>
  );
}

export default LandingPage;
