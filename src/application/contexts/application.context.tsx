import React, { createContext, ReactChildren, ReactChild } from 'react';
import {
  IWeatherOutput,
  useWeather,
  useAddress,
  IAddressOutput,
} from '../../domain';
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

  const value = { timeline, controls, weather, address };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};
