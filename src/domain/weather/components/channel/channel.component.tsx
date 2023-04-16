import React from 'react';
import { Scenes, useApplication } from '../../../../application';
import { Greetings } from '../scenes';
import { Container } from './channel.style';

export const WeatherChannel = () => {
  const { movie } = useApplication();

  const timeline = {
    [Scenes.GREETINGS]: () => <Greetings />,
    [Scenes.FETCHING]: () => <h3>Fetching...</h3>,
    [Scenes.DISPLAY]: () => <h3>Displaying some data 0/</h3>,
    [Scenes.ERROR]: () => <h3>Bad things happens to good people</h3>,
  };

  const play = timeline[movie.scene.current]();

  return <Container>{play}</Container>;
};
