import { SyntheticEvent, useState } from 'react';

export interface IFormOutput {
  state: {
    street: string;
    number: string;
    city: string;
    state: string;
    zipCode: string;
  };
  tools: {
    change: (event: SyntheticEvent) => void;
    validate: () => void;
  };
}

export const useForm = (): IFormOutput => {
  const [state, setState] = useState({
    street: '',
    number: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const change = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    const next = { [name]: value };

    setState((prev) => ({ ...prev, ...next }));
  };

  // TODO:
  const validate = () => {};

  const tools = { change, validate };

  return { state, tools };
};
