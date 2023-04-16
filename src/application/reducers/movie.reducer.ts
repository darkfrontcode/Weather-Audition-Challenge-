import { IMovieAction } from '../interfaces';
import { IMovie } from '../interfaces';

export const MovieReducer = (state: IMovie, action: IMovieAction) => {
  try {
    return {
      scene: {
        current: action.type,
      },
    };
  } catch (err) {
    throw Error('Unknown action.');
  }
};
