import axios from 'axios';
import { response } from '../../shared/models';
import { ICensusCoordinatesResponse, ICensusResponse } from '../interfaces';

// TODO: CREATE INTERCEPTORS FOR ERRORS
const http = axios.create({
  baseURL: 'https://geocoding.geo.census.gov/geocoder/geographies/',
  headers: { 'Access-Control-Allow-Origin': '*' },
});

const byOneLineAddress = async (
  address: string
): Promise<response<ICensusCoordinatesResponse>> => {
  try {
    const response = await http.get<ICensusResponse>(
      `onelineaddress?address=${address}&benchmark=2020&vintage=2010&format=json`
    );

    // TODO: Create interceptors to catch errors
    if (
      response.status === 200 &&
      response.data.result.addressMatches.length > 0
    ) {
      const ok = true;
      const data = response.data.result.addressMatches[0].coordinates;

      return response({ ok, data });
    }

    throw new Error('No address matches');
  } catch (err) {
    const ok = false;
    const data = null;

    return response({ ok, data });
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
