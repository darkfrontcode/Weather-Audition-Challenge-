import { useReducer } from 'react';
import { Scenes } from '../enums';
import { IMovie } from '../interfaces';
import { MovieReducer } from '../reducers';

const PLAY_MOVIE: IMovie = {
  scene: {
    current: Scenes.GREETINGS,
  },
};

export const useMovie = () => {
  const [state, dispatch] = useReducer(MovieReducer, PLAY_MOVIE);
  return { state, dispatch };
};
