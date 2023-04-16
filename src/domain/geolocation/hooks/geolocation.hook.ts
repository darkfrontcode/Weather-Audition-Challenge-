import axios from 'axios';

// https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress?address=4600+silver+hill+rd%2C+20233&benchmark=2020&vintage=2010&format=json

// TODO:
// MOVE:
// CREATE INTERCEPTORS FOR ERRORS

const http = axios.create({
  baseURL: 'https://geocoding.geo.census.gov/geocoder/geographies/',
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export interface IGeolocationOutput {
  get: {
    byOneLineAddress: (address?: string) => Promise<void>;
  };
}

export const useGeolocation = (): IGeolocationOutput => {
  const byOneLineAddress = async (
    address: string = '4600+silver+hill+rd%2C+20233'
  ) => {
    // TODO: type
    const response = await http.get(
      `onelineaddress?address=${address}&benchmark=2020&vintage=2010&format=json`
    );

    console.log(response);

    if (response.status === 200) {
      console.log(response.data);
    }
  };

  const get = {
    byOneLineAddress,
  };

  return { get };
};
