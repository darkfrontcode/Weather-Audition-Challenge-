import React, { createContext, ReactChildren, ReactChild } from 'react';
import { IPeriod, useWeather } from '../../domain';

import { ITimelineOutput, useTimeline } from '../hooks';

export interface IApplicationContext extends ITimelineOutput {
  weather: {
    forecast: IPeriod[];
  };
}

export interface IApplicationContextProps {
  children: ReactChild | ReactChildren;
}

export const ApplicationContext = createContext<IApplicationContext>();

export const ApplicationProvider = ({ children }: IApplicationContextProps) => {
  const { timeline, controls } = useTimeline();
  const weather = useWeather();

  return (
    <ApplicationContext.Provider value={{ timeline, controls, weather }}>
      {children}
    </ApplicationContext.Provider>
  );
};
