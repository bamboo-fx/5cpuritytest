import React from 'react';
import styled from 'styled-components';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';

const Container = styled.div`
  max-width: 600px;
  text-align: center;
  padding: 40px;
  background-color: ${props => props.theme.card};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ScoreDisplay = styled.div`
  font-size: 4rem;
  color: ${props => props.theme.primary};
  margin: 20px 0;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin: 20px 0;
  line-height: 1.6;
`;

const ShareContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
`;

const RetakeButton = styled.button`
  margin-top: 20px;
`;

function ResultsPage({ score, onRetake }) {
  const getDescription = (score) => {
    if (score >= 90) {
      return "You're just getting started with your 5C experience! There's so much more to explore and discover across the Claremont Colleges.";
    } else if (score >= 70) {
      return "You're getting familiar with the 5C life! You've had some classic experiences, but there's still plenty more to try.";
    } else if (score >= 50) {
      return "You're a true 5C veteran! You've experienced many of the quintessential moments that make the Claremont Colleges special.";
    } else if (score >= 30) {
      return "Wow! You're practically a 5C legend! You've really made the most of your time across the colleges.";
    } else {
      return "You are the ultimate 5C champion! You've truly experienced everything the Claremont Colleges have to offer!";
    }
  };

  const shareUrl = window.location.href;
  const shareTitle = `I scored ${score} on the 5C Purity Test! How pure are you? #5CPurityTest`;

  return (
    <Container>
      <h1>Your Results</h1>
      <ScoreDisplay>{score}</ScoreDisplay>
      <Description>{getDescription(score)}</Description>
      
      <ShareContainer>
        <FacebookShareButton url={shareUrl} quote={shareTitle}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={shareTitle}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={shareTitle}>
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
      </ShareContainer>

      <RetakeButton onClick={onRetake}>Take the Test Again</RetakeButton>
    </Container>
  );
}

export default ResultsPage;
