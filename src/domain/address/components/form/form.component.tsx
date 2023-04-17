import React from 'react';
import { IAddress } from '../../interfaces';
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

export interface IAddressFormProps {
  submit: {
    byOneLineAddress: (address: string) => void;
    byAddressFields: (address: IAddress) => void;
  };
}

export const AddressForm = ({ submit }: IAddressFormProps): JSX.Element => {
  const fullAddress = useFullAddress();
  const form = useForm();

  const submitByOneLineAddress = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    submit.byOneLineAddress(fullAddress.state);
  };

  const byAddressFields = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    submit.byAddressFields(form.state);
  };

  return (
    <Container>
      <Heading>Type a full address:</Heading>
      <Form autoComplete="off" onSubmit={submitByOneLineAddress}>
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
      </Form>
      <Divider>
        <HorizontalLine />
        <Or>or</Or>
      </Divider>
      <Heading>Part of it..</Heading>
      <Form autoComplete="off" onSubmit={byAddressFields}>
        <Grid>
          <NumberInput
            data-testid="NUMBER"
            id="number"
            type="text"
            name="number"
            placeholder="Number"
            value={form.state.number}
            onChange={form.tools.change}
          />
          <StreetInput
            data-testid="STREET"
            id="street"
            type="text"
            name="street"
            placeholder="Street"
            value={form.state.street}
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
