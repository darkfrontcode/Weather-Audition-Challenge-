import axios from 'axios';
import { ServiceResponse } from '../../shared';
import { IForecastGridResponse, IWeatherPointsResponse } from '../interfaces';

/*

  https://api.weather.gov/points/39.7456,-97.0892 -> properties -> {
    "gridId": "TOP",
    "gridX": 32,
    "gridY": 81,
  }

  https://api.weather.gov/gridpoints/TOP/32,81/forecast -> properties -> periods -> []

*/

const http = axios.create({
  baseURL: 'https://api.weather.gov/',
  headers: { 'Access-Control-Allow-Origin': '*' },
});

const byGridPoints = async () => {};

const byPoints = async (
  latitude: number = 39.7456,
  longitude: number = -97.0892
): Promise<ServiceResponse<IForecastGridResponse>> => {
  try {
    const response = await http.get<IWeatherPointsResponse>(
      `points/${latitude},${longitude}`
    );

    // TODO: Create interceptors to catch errors
    if (response.status === 200 && response.data.properties) {
      const { gridId, gridX, gridY } = response.data.properties;

      return ServiceResponse<IForecastGridResponse>({
        ok: true,
        data: { gridId, gridX, gridY },
      });
    }

    throw new Error('Something went wrong!');
  } catch (err) {
    return ServiceResponse<null>({
      ok: false,
      data: null,
    });
  }
};

const get = {
  byGridPoints,
  byPoints,
};

export const WeatherService = {
  get,
};
