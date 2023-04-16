import React from 'react';
import { useApplication } from '../../../../application';
import { Container } from './channel.style';

export const WeatherChannel = () => {
  const application = useApplication();

  return (
    <Container>
      <h3>Greetings 0/</h3>
      <p>{application.movie.scene.current}</p>
    </Container>
  );
};
