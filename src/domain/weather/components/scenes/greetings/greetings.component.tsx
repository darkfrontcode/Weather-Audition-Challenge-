import React from 'react';
import { Container, Heading, RaisedHands, Box } from './greetings.style';

export const Greetings = () => {
  return (
    <Container>
      <Box>
        <RaisedHands>🙌</RaisedHands>
        <Heading>Greetings!</Heading>
      </Box>
    </Container>
  );
};
