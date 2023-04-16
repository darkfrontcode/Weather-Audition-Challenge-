import { IForecastGridResponse } from './forecast-grid.response';

export interface IWeatherPointsResponse {
  properties: IForecastGridResponse;
}
