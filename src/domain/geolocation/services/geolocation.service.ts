import axios from 'axios';
import { IAddress } from '../../address';
import { ServiceResponse } from '../../shared/models';
import { ParameterFactory } from '../factories';
import { ICensusCoordinates, ICensusResponse } from '../interfaces';

const http = axios.create({
  baseURL: 'https://geocoding.geo.census.gov/geocoder/geographies/',
  headers: { 'Access-Control-Allow-Origin': '*' },
});

const byOneLineAddress = async (
  address: string
): Promise<ServiceResponse<ICensusCoordinates>> => {
  try {
    const response = await http.get<ICensusResponse>(
      `onelineaddress?address=${address}&benchmark=2020&vintage=2010&format=json`
    );

    const statusCode = response.status === 200;
    const hasAddressMatches = response.data.result.addressMatches.length > 0;

    if (statusCode && hasAddressMatches) {
      return ServiceResponse({
        ok: true,
        data: response.data.result.addressMatches[0].coordinates,
      });
    }

    return ServiceResponse<null>({ ok: true, data: null });
  } catch (err) {
    return ServiceResponse<null>({ ok: false, data: null });
  }
};

const byAddressFields = async (
  address: IAddress
): Promise<ServiceResponse<ICensusCoordinates>> => {
  const parameters = ParameterFactory.createfromAddressFields(address);

  try {
    const response = await http.get<ICensusResponse>(
      `address?${parameters}&benchmark=2020&vintage=2010&format=json`
    );

    const statusCode = response.status === 200;
    const hasAddressMatches = response.data.result.addressMatches.length > 0;

    if (statusCode && hasAddressMatches) {
      return ServiceResponse({
        ok: true,
        data: response.data.result.addressMatches[0].coordinates,
      });
    }

    return ServiceResponse<null>({ ok: true, data: null });
  } catch (err) {
    return ServiceResponse<null>({ ok: false, data: null });
  }
};

const get = {
  byOneLineAddress,
  byAddressFields,
};

export const GeolocationService = {
  get,
};
