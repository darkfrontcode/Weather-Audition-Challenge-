import { IAddress } from '../../address';

export const createfromAddressFields = ({
  number,
  street,
  city,
  state,
  zipCode,
}: IAddress): string => {
  let parameters = `street=${number} ${street}`;

  if (city !== '') {
    parameters = parameters.concat(`&city=${city}`);
  }

  if (state !== '') {
    parameters = parameters.concat(`&state=${state}`);
  }

  if (zipCode !== '') {
    parameters = parameters.concat(`&zip=${zipCode}`);
  }

  return parameters;
};

export const ParameterFactory = {
  createfromAddressFields,
};
