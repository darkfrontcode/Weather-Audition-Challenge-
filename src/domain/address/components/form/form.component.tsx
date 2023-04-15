import React, { SyntheticEvent, useState } from 'react';
import { SimpleButton } from '../../../../ui';
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

export const AddressForm = (): JSX.Element => {
  // TODO: Fix this
  const [fullAddress, setFullAddress] = useState<string>('');
  const form = useForm();

  return (
    <Container>
      <Form autoComplete="off">
        <Heading>Type a full address:</Heading>
        <FullAddressSearchInput
          input={{
            'data-testid': 'FULL_ADDRESS',
            id: 'fullAddress',
            type: 'text',
            name: 'fullAddress',
            placeholder: 'Full Address',
            value: fullAddress,
            onChange: (value) => setFullAddress(value.target.value),
            autoComplete: 'off',
          }}
          button={{
            children: 'Ok',
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
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Container>
  );
};
