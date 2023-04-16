import { useState } from 'react';
import { GeolocationService, IPeriod, WeatherService } from '../../domain';
import { Scene } from '../enums';
import { useApplicationContext } from './application-context.hook';

export interface IApplicationOutput {
  request: {
    weather: {
      byOneLineAddress: (address: string) => Promise<void>;
      byAddressFields: () => void;
    };
  };
  response: {
    forecast: IPeriod[];
  };
}

export const useApplication = (): IApplicationOutput => {
  const application = useApplicationContext();
  const [forecast, setForecast] = useState<IPeriod[]>([]);

  const byOneLineAddress = async (address: string): Promise<void> => {
    application.goToScene(Scene.FETCHING);

    const geolocation = await GeolocationService.get.byOneLineAddress(address);

    if (!geolocation.ok) {
      return application.goToScene(Scene.ERROR);
    }

    if (!geolocation.data) {
      return application.goToScene(Scene.NOT_FOUND);
    }

    const { y, x } = geolocation.data;
    const points = await WeatherService.get.byPoints(y, x);

    if (!points.ok) {
      return application.goToScene(Scene.ERROR);
    }

    const { gridId, gridX, gridY } = points.data;
    const grid = await WeatherService.get.byGridPoints(gridId, gridX, gridY);

    if (!grid.ok) {
      return application.goToScene(Scene.ERROR);
    }

    setForecast(grid);

    return application.goToScene(Scene.DISPLAY);
  };

  // TODO:
  const byAddressFields = () => {};

  return {
    request: {
      weather: {
        byOneLineAddress,
        byAddressFields,
      },
    },
    response: {
      forecast,
    },
  };
};
