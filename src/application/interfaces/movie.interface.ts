import { Scenes } from '../enums';

export interface IMovie {
  scene: {
    current: Scenes;
  };
}
