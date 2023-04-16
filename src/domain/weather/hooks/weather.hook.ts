import { useState } from 'react';
import { IPeriod } from '../interfaces';

export interface IWeather {
  forecast: IPeriod[];
  change: (next: IPeriod[]) => void;
}

export const useWeather = () => {
  const [forecast, setForecast] = useState<IPeriod[]>([]);
  const change = (next: IPeriod[]) => setForecast(next);

  return { forecast, change };
};
