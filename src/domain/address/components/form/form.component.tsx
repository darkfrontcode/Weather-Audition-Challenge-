import React, { SyntheticEvent, useState } from 'react';
import { useGeolocation } from '../../../geolocation';
import {
  Container,
  Divider,
  Heading,
  HorizontalLine,
  Or,
  Form,
  Grid,
  StreetInput,
  NumberInput,
  CityInput,
  StateInput,
  ZipCodeInput,
  SubmitButton,
  FullAddressSearchInput,
} from './form.style';
import { useForm } from './hooks';
import { useFullAddress } from './hooks/full-address.hook';

export const AddressForm = (): JSX.Element => {
  const geolocation = useGeolocation();
  const fullAddress = useFullAddress();
  const form = useForm();

  return (
    <Container>
      <Form
        autoComplete="off"
        onSubmit={(event) => {
          // TODO:
          event.preventDefault();
          geolocation.get.byOneLineAddress();
          console.log('Sent!');
        }}
      >
        <Heading>Type a full address:</Heading>
        <FullAddressSearchInput
          input={{
            'data-testid': 'FULL_ADDRESS',
            id: 'fullAddress',
            type: 'text',
            name: 'fullAddress',
            placeholder: 'Full Address',
            value: fullAddress.state,
            onChange: fullAddress.tools.change,
            autoComplete: 'off',
          }}
          button={{
            children: 'Ok',
            disabled: fullAddress.tools.invalid,
          }}
        />
        <Divider>
          <HorizontalLine />
          <Or>or</Or>
        </Divider>
        <Heading>Part of it..</Heading>
        <Grid>
          <StreetInput
            data-testid="STREET"
            id="street"
            type="text"
            name="street"
            placeholder="Street"
            value={form.state.street}
            onChange={form.tools.change}
          />
          <NumberInput
            data-testid="NUMBER"
            id="number"
            type="text"
            name="number"
            placeholder="Number"
            value={form.state.number}
            onChange={form.tools.change}
          />
          <CityInput
            data-testid="CITY"
            id="city"
            type="text"
            name="city"
            placeholder="City"
            value={form.state.city}
            onChange={form.tools.change}
          />
          <StateInput
            data-testid="STATE"
            id="state"
            type="text"
            name="state"
            placeholder="State"
            value={form.state.state}
            onChange={form.tools.change}
          />
          <ZipCodeInput
            data-testid="ZIP_CODE"
            id="zipCode"
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={form.state.zipCode}
            onChange={form.tools.change}
          />
        </Grid>
        <SubmitButton disabled={form.tools.invalid}>Submit</SubmitButton>
      </Form>
    </Container>
  );
};
