import { useContext } from 'react';
import { ApplicationContext } from '../contexts';
import { IApplicationContext } from '../contexts/application.context';

export const useApplicationContext = (): IApplicationContext => {
  const application = useContext(ApplicationContext);
  return { ...application };
};
