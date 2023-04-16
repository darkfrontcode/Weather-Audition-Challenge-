import React, { createContext, ReactChildren, ReactChild } from 'react';

import { ITimelineOutput, useTimeline } from '../hooks';

export interface IApplicationContext extends ITimelineOutput {
  weather: {};
}

export interface IApplicationContextProps {
  children: ReactChild | ReactChildren;
}

export const ApplicationContext = createContext<IApplicationContext>();

export const ApplicationProvider = ({ children }: IApplicationContextProps) => {
  const timeline = useTimeline();

  return (
    <ApplicationContext.Provider value={{ ...timeline }}>
      {children}
    </ApplicationContext.Provider>
  );
};
