import React from 'react';
import { Scenes, useApplication } from '../../../../application';
import { Container } from './channel.style';

export const WeatherChannel = () => {
  const { movie, goToScene } = useApplication();

  const timeline = {
    [Scenes.GREETINGS]: () => <h3>Greetings 0/</h3>,
    [Scenes.FETCHING]: () => <h3>Fetching...</h3>,
    [Scenes.DISPLAY]: () => <h3>Displaying some data 0/</h3>,
    [Scenes.ERROR]: () => <h3>Bad things happens to good people</h3>,
  };

  const play = timeline[movie.scene.current]();

  return (
    <Container>
      {play}
      <button onClick={() => goToScene(Scenes.GREETINGS)}>Greetings</button>
      <button onClick={() => goToScene(Scenes.FETCHING)}>Greetings</button>
      <button onClick={() => goToScene(Scenes.DISPLAY)}>Greetings</button>
      <button onClick={() => goToScene(Scenes.ERROR)}>Greetings</button>
    </Container>
  );
};
