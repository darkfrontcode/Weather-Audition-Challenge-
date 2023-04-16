import axios from 'axios';
import { ICensusResponse } from '../interfaces';

// TODO: CREATE INTERCEPTORS FOR ERRORS
const http = axios.create({
  baseURL: 'https://geocoding.geo.census.gov/geocoder/geographies/',
  headers: { 'Access-Control-Allow-Origin': '*' },
});

const byOneLineAddress = async (address: string) =>
  await http.get<ICensusResponse>(
    `onelineaddress?address=${address}&benchmark=2020&vintage=2010&format=json`
  );

const byAddressFields = () => {};

const get = {
  byOneLineAddress,
  byAddressFields,
};

export const geolocationService = {
  get,
};
