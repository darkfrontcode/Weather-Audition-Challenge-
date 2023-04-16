import React, { createContext, ReactChildren, ReactChild } from 'react';

import { IMovieiOutput, useMovie } from '../hooks';

export interface IApplicationContext extends IMovieiOutput {}

export interface IApplicationContextProps {
  children: ReactChild | ReactChildren;
}

export const ApplicationContext = createContext<IApplicationContext>();

export const ApplicationProvider = ({ children }: IApplicationContextProps) => {
  const movie = useMovie();

  return (
    <ApplicationContext.Provider value={{ ...movie }}>
      {children}
    </ApplicationContext.Provider>
  );
};
