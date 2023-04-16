import axios from 'axios';
import { ServiceResponse } from '../../shared';
import {
  IForecastGrid,
  IPeriod,
  IWeatherPointsResponse,
  IWeatherGridPointsResponse,
} from '../interfaces';

const http = axios.create({
  baseURL: 'https://api.weather.gov/',
  headers: { 'Access-Control-Allow-Origin': '*' },
});

const byGridPoints = async (
  gridId: string,
  gridX: number,
  gridY: number
): Promise<ServiceResponse<IPeriod[]>> => {
  try {
    const response = await http.get<IWeatherGridPointsResponse>(
      `gridpoints/${gridId}/${gridX},${gridY}/forecast`
    );

    const statusCode = response.status === 200;
    const hasPeriods = response.data.properties.periods.length > 0;

    if (statusCode && hasPeriods) {
      return ServiceResponse<IPeriod[]>({
        ok: true,
        data: response.data.properties.periods,
      });
    }

    return ServiceResponse<null>({ ok: true, data: null });
  } catch (err) {
    return ServiceResponse<null>({ ok: false, data: null });
  }
};

const byPoints = async (
  latitude: number = 39.7456,
  longitude: number = -97.0892
): Promise<ServiceResponse<IForecastGrid>> => {
  try {
    const response = await http.get<IWeatherPointsResponse>(
      `points/${latitude},${longitude}`
    );

    const statusCode = response.status === 200 || response.status === 301;
    const properties = response.data.properties;

    if (statusCode && properties) {
      const { gridId, gridX, gridY } = properties;

      return ServiceResponse<IForecastGrid>({
        ok: true,
        data: { gridId, gridX, gridY },
      });
    }

    return ServiceResponse<null>({ ok: true, data: null });
  } catch (err) {
    return ServiceResponse<null>({ ok: false, data: null });
  }
};

const get = {
  byGridPoints,
  byPoints,
};

export const WeatherService = {
  get,
};
