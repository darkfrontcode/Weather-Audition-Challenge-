import { object, string, number, InferType } from 'yup';

export const AddressSchema = object().shape(
  {
    street: string().required(),
    number: string().required(),
    city: string()
      .nullable()
      .default(() => String())
      .when(['number', 'street', 'zipCode'], {
        is: (number: string, street: string, zipCode: string) =>
          number != '' && street != '' && zipCode == '',
        then: (schema) => schema.required(),
        otherwise: (schema) => schema,
      }),
    state: string()
      .nullable()
      .default(() => String())
      .when(['number', 'street', 'zipCode'], {
        is: (number: string, street: string, zipCode: string) =>
          number != '' && street != '' && zipCode == '',
        then: (schema) => schema.required(),
        otherwise: (schema) => schema,
      }),
    zipCode: string()
      .nullable()
      .default(() => String())
      .when(['number', 'street', 'city', 'state'], {
        is: (number: string, street: string, city: string, state: string) =>
          number != '' && street != '' && city == '' && state == '',
        then: (schema) => schema.required(),
        otherwise: (schema) => schema,
      }),
  },
  [
    ['state', 'zipCode'],
    ['city', 'zipCode'],
  ]
);

export interface IAddress extends InferType<typeof AddressSchema> {}
