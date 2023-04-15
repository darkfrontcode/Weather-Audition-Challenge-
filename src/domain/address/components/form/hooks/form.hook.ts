import { SyntheticEvent, useState, useEffect } from 'react';
import { AddressSchema, IAddress } from '../../../interfaces';

const INITIAL_STATE = {
  street: '',
  number: '',
  city: '',
  state: '',
  zipCode: '',
};

export interface IFormOutput {
  state: IAddress;
  tools: {
    change: (event: SyntheticEvent) => void;
    invalid: boolean;
  };
}

export const useForm = (): IFormOutput => {
  const [state, setState] = useState<IAddress>(INITIAL_STATE);
  const [invalid, setInvalid] = useState<boolean>(true);

  const change = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    const next = { [name]: value };

    setState((prev) => ({ ...prev, ...next }));
  };

  const validate = async () => {
    try {
      await AddressSchema.validate(state);
      setInvalid(false);
    } catch (error) {
      setInvalid(true);
    }
  };

  useEffect(() => {
    validate();
  }, [state]);

  const tools = { change, invalid };

  return { state, tools };
};
