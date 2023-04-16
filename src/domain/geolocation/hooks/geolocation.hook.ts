import { useState } from 'react';
import { ICoordinates } from '../interfaces';
import { geolocationService } from '../services';

const INITIAL_COORDINATES = {
  latitude: 0,
  longitude: 0,
  available: false,
};

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
    const response = await geolocationService.get.byOneLineAddress(address);

    if (response.ok) {
      const { y, x } = response.data;

      setCoordinates({
        latitude: y,
        longitude: x,
        available: true,
      });

      return;
    }

    setCoordinates(INITIAL_COORDINATES);
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
