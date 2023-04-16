import React from 'react';
import { Container, Heading, Disappointed, Box, Retry } from './error.style';

export const Error = () => {
  return (
    <Container>
      <Box>
        <Disappointed>😞</Disappointed>
        <Heading>
          <span>Bad things happen</span>
          <br />
          <span>to good people</span>
        </Heading>
        <Retry>
          <span>Can you please try again?</span>
          <span>🔄</span>
        </Retry>
      </Box>
    </Container>
  );
};
