import { useState } from 'react';
import { IPeriod } from '../interfaces';

export interface IWeatherOutput {
  forecast: IPeriod[];
  change: (next: IPeriod[]) => void;
}

export const useWeather = (): IWeatherOutput => {
  const [forecast, setForecast] = useState<IPeriod[]>([]);
  const change = (grid: IPeriod[]) => setForecast(grid);

  return { forecast, change };
};
