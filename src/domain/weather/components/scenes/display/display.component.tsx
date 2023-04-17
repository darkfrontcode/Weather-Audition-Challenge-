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
  Image,
  Source,
  Name,
  Address,
} from './display.style';

export const Display = () => {
  const app = useApplicationContext();

  return (
    <Container>
      <Heading>Weather Forecast</Heading>
      <Address>{app.address.oneline.state}</Address>
      <Grid>
        {app.weather.forecast.map((period) => (
          <Period key={period.name}>
            <Card>
              <Day>
                <Name>{period.name}</Name>
              </Day>
              <Image>
                <Source src={period.icon} />
              </Image>
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
