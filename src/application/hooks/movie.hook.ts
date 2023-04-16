import { useReducer } from 'react';
import { Scenes } from '../enums';
import { IMovie } from '../interfaces';
import { MovieReducer } from '../reducers';

const PLAY_MOVIE: IMovie = {
  scene: {
    current: Scenes.GREETINGS,
  },
};

export interface IMovieiOutput {
  scene: {
    current: Scenes;
  };
  goToScene: (scene: Scenes) => void;
}

export const useMovie = (): IMovieiOutput => {
  const [movie, dispatch] = useReducer(MovieReducer, PLAY_MOVIE);
  const goToScene = (scene: Scenes) => dispatch({ type: scene, payload: null });

  return { movie, goToScene };
};
