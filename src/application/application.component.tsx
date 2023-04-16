import React from 'react';
import { AddressForm, WeatherChannel } from '../domain';
import { Logo } from './components';
import { Container, Navigation, Content } from './application.style';
import { ApplicationProvider } from './contexts';
import { useApplication } from './hooks';

export const Application = (): JSX.Element => {
  const application = useApplication();

  return (
    <ApplicationProvider>
      <Container>
        <Navigation>
          <Logo />
          {/* TODO: */}
          <AddressForm
            submit={{
              byOneLineAddress: application.request.weather.byOneLineAddress,
              byAddressFields: application.request.weather.byAddressFields,
            }}
          />
        </Navigation>
        <Content>
          <WeatherChannel />
        </Content>
      </Container>
    </ApplicationProvider>
  );
};
