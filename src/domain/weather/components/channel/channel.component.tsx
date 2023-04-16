import React from 'react';
import { Scenes, useApplicationContext } from '../../../../application';
import { Greetings, Fetching, Error, NotFound } from '../scenes';
import { Container } from './channel.style';

export const WeatherChannel = () => {
  const { movie } = useApplicationContext();

  const timeline = {
    [Scenes.GREETINGS]: () => <Greetings />,
    [Scenes.FETCHING]: () => <Fetching />,
    [Scenes.DISPLAY]: () => <h3>Displaying some data 0/</h3>,
    [Scenes.NOT_FOUND]: () => <NotFound />,
    [Scenes.ERROR]: () => <Error />,
  };

  const play = timeline[movie.scene.current]();

  return <Container>{play}</Container>;
};
