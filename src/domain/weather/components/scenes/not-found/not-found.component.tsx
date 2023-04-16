import React from 'react';
import {
  Container,
  Heading,
  Disappointed,
  Box,
  Retry,
} from './not-found.style';

export const NotFound = () => {
  return (
    <Container>
      <Box>
        <Disappointed>❌</Disappointed>
        <Heading>
          <span>Address not found!</span>
        </Heading>
        <Retry>
          <span>Can you please try again?</span>
          <span>🔄</span>
        </Retry>
      </Box>
    </Container>
  );
};
