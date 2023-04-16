import React, { createContext, ReactChildren, ReactChild } from 'react';

import { useMovie } from '../hooks';

export interface IApplicationContext {}

export interface IApplicationContextProps {
  children: ReactChild | ReactChildren;
}

export const ApplicationContext = createContext<IApplicationContext>({});

export const ApplicationProvider = ({ children }: IApplicationContextProps) => {
  const movie = useMovie();

  return (
    <ApplicationContext.Provider value={{}}>
      {children}
    </ApplicationContext.Provider>
  );
};
