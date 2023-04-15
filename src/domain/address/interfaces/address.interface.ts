import { object, string, number, InferType } from 'yup';

export const AddressSchema = object({
  street: string().required(),
  number: string().required(),
  city: string()
    .nullable()
    .default(() => String()),
  state: string()
    .nullable()
    .default(() => String()),
  zipCode: string()
    .nullable()
    .default(() => String()),
});

export interface IAddress extends InferType<typeof AddressSchema> {}
