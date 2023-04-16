import { Scene } from '../enums';

export interface ITimeline {
  scene: {
    prev: Scene;
    current: Scene;
  };
}
