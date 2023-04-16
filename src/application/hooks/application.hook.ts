import { useState } from 'react';
import { GeolocationService, IPeriod, WeatherService } from '../../domain';
import { Scenes } from '../enums';
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
    application.goToScene(Scenes.FETCHING);

    const geolocation = await GeolocationService.get.byOneLineAddress(address);

    if (!geolocation.ok) {
      return application.goToScene(Scenes.ERROR);
    }

    const { y, x } = geolocation.data;
    const points = await WeatherService.get.byPoints(y, x);

    if (!points.ok) {
      return application.goToScene(Scenes.ERROR);
    }

    const { gridId, gridX, gridY } = points.data;
    const grid = await WeatherService.get.byGridPoints(gridId, gridX, gridY);

    if (!grid.ok) {
      return application.goToScene(Scenes.ERROR);
    }

    setForecast(grid);
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
