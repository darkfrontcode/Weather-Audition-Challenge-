import { IAddress } from '../../address';

export const joinFromFields = ({
  number,
  street,
  city,
  state,
  zipCode,
}: IAddress): string => {
  let composition = `${number} ${street}`;

  if (city !== '') {
    composition = composition.concat(`, ${city}`);
  }

  if (state !== '') {
    composition = composition.concat(`, ${state}`);
  }

  if (zipCode !== '') {
    composition = composition.concat(` ${zipCode}`);
  }

  return composition;
};

export const AddressFactory = {
  joinFromFields,
};
