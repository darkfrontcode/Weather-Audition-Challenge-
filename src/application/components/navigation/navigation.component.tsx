import React from 'react';
import { AddressForm } from '../../../domain';
import { useApplication } from '../../hooks';
import { Logo } from '../logo';
import { Container } from './navigation.style';

export const Navigation = () => {
  const application = useApplication();
  const { byOneLineAddress, byAddressFields } = application.request.weather;

  return (
    <Container>
      <Logo />
      <AddressForm
        submit={{
          byOneLineAddress,
          byAddressFields,
        }}
      />
    </Container>
  );
};
