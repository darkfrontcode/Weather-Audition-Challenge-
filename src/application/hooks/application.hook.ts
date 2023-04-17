import {
  AddressFactory,
  GeolocationService,
  IAddress,
  WeatherService,
} from '../../domain';
import { Scene } from '../enums';
import { useApplicationContext } from './application-context.hook';

export interface IApplicationOutput {
  request: {
    weather: {
      byOneLineAddress: (address: string) => Promise<void>;
      byAddressFields: (address: IAddress) => Promise<void>;
    };
  };
}

export const useApplication = (): IApplicationOutput => {
  const app = useApplicationContext();

  const byOneLineAddress = async (address: string): Promise<void> => {
    app.controls.go(Scene.FETCHING);

    const geolocation = await GeolocationService.get.byOneLineAddress(address);

    if (!geolocation.ok) {
      return app.controls.go(Scene.ERROR);
    }

    if (!geolocation.data) {
      return app.controls.go(Scene.NOT_FOUND);
    }

    const { y, x } = geolocation.data;
    const points = await WeatherService.get.byPoints(y, x);

    if (!points.ok) {
      return app.controls.go(Scene.ERROR);
    }

    const { gridId, gridX, gridY } = points.data;
    const grid = await WeatherService.get.byGridPoints(gridId, gridX, gridY);

    if (!grid.ok) {
      return app.controls.go(Scene.ERROR);
    }

    app.address.oneline.change(address);
    app.weather.change(grid.data);

    return app.controls.go(Scene.DISPLAY);
  };

  const byAddressFields = async (address: IAddress): Promise<void> => {
    app.controls.go(Scene.FETCHING);

    const geolocation = await GeolocationService.get.byAddressFields(address);

    if (!geolocation.ok) {
      return app.controls.go(Scene.ERROR);
    }

    if (!geolocation.data) {
      return app.controls.go(Scene.NOT_FOUND);
    }

    const { y, x } = geolocation.data;
    const points = await WeatherService.get.byPoints(y, x);

    if (!points.ok) {
      return app.controls.go(Scene.ERROR);
    }

    const { gridId, gridX, gridY } = points.data;
    const grid = await WeatherService.get.byGridPoints(gridId, gridX, gridY);

    if (!grid.ok) {
      return app.controls.go(Scene.ERROR);
    }

    const onelineAddress = AddressFactory.joinFromFields(address);

    app.address.oneline.change(onelineAddress);
    app.weather.change(grid.data);

    return app.controls.go(Scene.DISPLAY);
  };

  return {
    request: {
      weather: {
        byOneLineAddress,
        byAddressFields,
      },
    },
  };
};
