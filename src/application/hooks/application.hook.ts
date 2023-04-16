import { useContext } from 'react';
import { ApplicationContext } from '../contexts';
import { IApplicationContext } from '../contexts/application.context';

export const useApplication = (): IApplicationContext => {
  const application = useContext(ApplicationContext);
  return { ...application };
};
