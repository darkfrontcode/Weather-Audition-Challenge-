import React from 'react';
import { Forecast, Navigation } from './components';
import { Container } from './application.style';
import { ApplicationProvider } from './contexts';

export const Application = (): JSX.Element => (
  <ApplicationProvider>
    <Container>
      <Navigation />
      <Forecast />
    </Container>
  </ApplicationProvider>
);
