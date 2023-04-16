import { useReducer } from 'react';
import { Scene } from '../enums';
import { ITimeline } from '../interfaces';
import { TimelineReducer } from '../reducers';

const PLAY_TIMELINE: ITimeline = {
  scene: {
    prev: Scene.GREETINGS,
    current: Scene.GREETINGS,
  },
};

export interface ITimelineOutput {
  timeline: ITimeline;
  controls: {
    go: (scene: Scene) => void;
  };
}

export const useTimeline = (): ITimelineOutput => {
  const [timeline, dispatch] = useReducer(TimelineReducer, PLAY_TIMELINE);
  const go = (scene: Scene) => dispatch({ type: scene, payload: null });

  return {
    timeline,
    controls: { go },
  };
};
