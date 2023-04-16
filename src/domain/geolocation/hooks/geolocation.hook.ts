import axios from 'axios';
import { useState } from 'react';
import { ICoordinates } from '../interfaces';

// https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress?address=4600+silver+hill+rd%2C+20233&benchmark=2020&vintage=2010&format=json

// TODO:
// MOVE:
// CREATE INTERCEPTORS FOR ERRORS

const http = axios.create({
  baseURL: 'https://geocoding.geo.census.gov/geocoder/geographies/',
  headers: { 'Access-Control-Allow-Origin': '*' },
});

const INITIAL_COORDINATES = {
  latitude: 0,
  longitude: 0,
  available: false,
};

// TODO:
export interface ICensusResponse {
  result: {
    addressMatches: {
      coordinates: {
        x: number;
        y: number;
      };
    }[];
  };
}

export interface IGeolocationOutput {
  get: {
    byOneLineAddress: (address?: string) => Promise<void>;
    byAddressFields: () => void;
  };
  response: {
    coordinates: ICoordinates;
  };
}

export const useGeolocation = (): IGeolocationOutput => {
  const [coordinates, setCoordinates] =
    useState<ICoordinates>(INITIAL_COORDINATES);

  const byOneLineAddress = async (
    address: string = '4600+silver+hill+rd%2C+20233'
  ): Promise<void> => {
    try {
      const response = await http.get<ICensusResponse>(
        `onelineaddress?address=${address}&benchmark=2020&vintage=2010&format=json`
      );

      // TODO:
      if (
        response.status === 200 &&
        response.data.result.addressMatches.length > 0
      ) {
        const { y, x } = response.data.result.addressMatches[0].coordinates;

        setCoordinates({
          latitude: y,
          longitude: x,
          available: true,
        });

        return;
      }

      throw new Error('No address matches');
    } catch (err) {
      setCoordinates(INITIAL_COORDINATES);
    }
  };

  // TODO:
  const byAddressFields = () => {};

  const get = {
    byOneLineAddress,
    byAddressFields,
  };

  const response = {
    coordinates,
  };

  return { response, get };
};
