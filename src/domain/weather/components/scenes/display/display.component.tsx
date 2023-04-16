import React from 'react';
import { useApplicationContext } from '../../../../../application';
import {
  Box,
  Card,
  Container,
  Day,
  Grid,
  Heading,
  Period,
  ShortDescription,
  Temperature,
  Unit,
} from './display.style';

export const Display = () => {
  const app = useApplicationContext();

  console.log(app.weather.forecast);

  return (
    <Container>
      <Heading>{app.address.oneline.state}</Heading>
      <Grid>
        {app.weather.forecast.map((period) => (
          <Period key={period.name}>
            <Card>
              <Day>{period.name}</Day>
              <Box>
                <Temperature>{period.temperature}</Temperature>
                <Unit>{period.temperatureUnit}</Unit>
              </Box>
              <ShortDescription>{period.shortForecast}</ShortDescription>
            </Card>
          </Period>
        ))}
      </Grid>
    </Container>
  );
};
