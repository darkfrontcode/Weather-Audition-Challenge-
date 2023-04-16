import React, { createContext, ReactChildren, ReactChild } from 'react';
import { IWeatherOutput, useWeather, useAddress } from '../../domain';
import { ITimelineOutput, useTimeline } from '../hooks';

export interface IApplicationContext extends ITimelineOutput {
  weather: IWeatherOutput;
  address: IAddressOutput;
}

export interface IApplicationContextProps {
  children: ReactChild | ReactChildren;
}

export const ApplicationContext = createContext<IApplicationContext>();

export const ApplicationProvider = ({ children }: IApplicationContextProps) => {
  const { timeline, controls } = useTimeline();
  const weather = useWeather();
  const address = useAddress();

  return (
    <ApplicationContext.Provider value={{ timeline, controls, weather }}>
      {children}
    </ApplicationContext.Provider>
  );
};
