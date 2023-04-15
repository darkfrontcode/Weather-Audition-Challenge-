import React from 'react';
import { AddressForm } from '../domain';
import { Logo } from './components';
import { Application, Navigation, Content } from './layout.style';

export const Layout = (): JSX.Element => (
  <Application>
    <Navigation>
      <Logo />
      <AddressForm />
    </Navigation>
    <Content>Content</Content>
  </Application>
);
