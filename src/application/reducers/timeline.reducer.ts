import { ITimeline, ITimelineAction } from '../interfaces';

export const TimelineReducer = (state: ITimeline, action: ITimelineAction) => {
  try {
    return {
      scene: {
        prev: state.scene.current,
        current: action.type,
      },
    };
  } catch (err) {
    throw Error('Unknown action.');
  }
};
