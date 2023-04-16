import React from 'react';
import { Scenes, useApplication } from '../../../../application';
import { Greetings, Fetching, Error } from '../scenes';
import { Container } from './channel.style';

export const WeatherChannel = () => {
  const { movie } = useApplication();

  const timeline = {
    [Scenes.GREETINGS]: () => <Greetings />,
    [Scenes.FETCHING]: () => <Fetching />,
    [Scenes.DISPLAY]: () => <h3>Displaying some data 0/</h3>,
    [Scenes.ERROR]: () => <Error />,
  };

  const play = timeline[movie.scene.current]();

  return <Container>{play}</Container>;
};
