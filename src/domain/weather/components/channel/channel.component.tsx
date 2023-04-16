import React from 'react';
import { Scene, useApplicationContext } from '../../../../application';
import { Greetings, Fetching, Error, NotFound } from '../scenes';
import { Container } from './channel.style';

export const WeatherChannel = () => {
  const { timeline } = useApplicationContext();

  const roadmap = {
    [Scene.GREETINGS]: () => <Greetings />,
    [Scene.FETCHING]: () => <Fetching />,
    [Scene.DISPLAY]: () => <h3>Displaying some data 0/</h3>,
    [Scene.NOT_FOUND]: () => <NotFound />,
    [Scene.ERROR]: () => <Error />,
  };

  const play = roadmap[timeline.scene.current]();

  return <Container>{play}</Container>;
};
