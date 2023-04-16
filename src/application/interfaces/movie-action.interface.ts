import { Scenes } from '../enums';
import { IReducerAction } from './reducer-action.interface';

export interface IMovieAction extends IReducerAction<Scenes, null> {}
