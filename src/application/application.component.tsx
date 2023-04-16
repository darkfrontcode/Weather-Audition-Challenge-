import React from 'react';
import { AddressForm } from '../domain';
import { Logo } from './components';
import { Container, Navigation, Content } from './application.style';
import { ApplicationProvider } from './contexts';

export const Application = (): JSX.Element => (
  <ApplicationProvider>
    <Container>
      <Navigation>
        <Logo />
        <AddressForm />
      </Navigation>
      <Content>Content</Content>
    </Container>
  </ApplicationProvider>
);
