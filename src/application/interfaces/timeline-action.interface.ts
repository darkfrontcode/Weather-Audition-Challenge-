import { Scene } from '../enums';
import { IReducerAction } from './reducer-action.interface';

export interface ITimelineAction extends IReducerAction<Scene, null> {}
