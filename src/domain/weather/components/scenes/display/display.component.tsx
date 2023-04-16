import React from 'react';
import { useApplicationContext } from '../../../../../application';
import { Container, Grid, Heading, Period } from './display.style';

export const Display = () => {
  const app = useApplicationContext();

  console.log(app.weather.forecast);

  return (
    <Container>
      <Heading>{app.address.oneline.state}</Heading>
      <Grid>
        {app.weather.forecast.map((period) => (
          <Period key={period.name}>
            <p>{period.name}</p>
            <p>{period.temperature}</p>
            <p>{period.temperatureUnit}</p>
            <p>{period.shortForecast}</p>
          </Period>
        ))}
      </Grid>
    </Container>
  );
};
