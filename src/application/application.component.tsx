import React from 'react';
import { AddressForm } from '../domain';
import { Logo } from './components';
import { Container, Navigation, Content } from './application.style';

export const Application = (): JSX.Element => (
  <Container>
    <Navigation>
      <Logo />
      <AddressForm />
    </Navigation>
    <Content>Content</Content>
  </Container>
);
