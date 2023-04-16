import axios from 'axios';
import { ServiceResponse } from '../../shared/models';
import { ICensusCoordinatesResponse, ICensusResponse } from '../interfaces';

const http = axios.create({
  baseURL: 'https://geocoding.geo.census.gov/geocoder/geographies/',
  headers: { 'Access-Control-Allow-Origin': '*' },
});

const byOneLineAddress = async (
  address: string
): Promise<ServiceResponse<ICensusCoordinatesResponse>> => {
  try {
    const response = await http.get<ICensusResponse>(
      `onelineaddress?address=${address}&benchmark=2020&vintage=2010&format=json`
    );

    // TODO: Create interceptors to catch errors
    if (
      response.status === 200 &&
      response.data.result.addressMatches.length > 0
    ) {
      return ServiceResponse({
        ok: true,
        data: response.data.result.addressMatches[0].coordinates,
      });
    }

    throw new Error('No address matches');
  } catch (err) {
    return ServiceResponse<null>({
      ok: false,
      data: null,
    });
  }
};

const byAddressFields = () => {};

const get = {
  byOneLineAddress,
  byAddressFields,
};

export const geolocationService = {
  get,
};
