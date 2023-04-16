import { IPeriod } from '../period.interface';

export interface IWeatherGridPointsResponse {
  properties: {
    periods: IPeriod[];
  };
}
