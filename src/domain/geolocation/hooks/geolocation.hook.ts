import { useState } from 'react';
import { useApplication, Scenes } from '../../../application';
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
  const application = useApplication();
  const [coordinates, setCoordinates] =
    useState<ICoordinates>(INITIAL_COORDINATES);

  const byOneLineAddress = async (
    address: string = '4600+silver+hill+rd%2C+20233'
  ): Promise<void> => {
    application.goToScene(Scenes.FETCHING);

    const response = await geolocationService.get.byOneLineAddress(address);

    if (response.ok) {
      const { y, x } = response.data;

      setCoordinates({
        latitude: y,
        longitude: x,
        available: true,
      });

      application.goToScene(Scenes.DISPLAY);
      return;
    }

    application.goToScene(Scenes.ERROR);
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
