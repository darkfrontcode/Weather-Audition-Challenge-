import { SyntheticEvent, useState, useEffect } from 'react';

export interface IFullAddressOutput {
  state: string;
  tools: {
    change: (event: SyntheticEvent) => void;
    invalid: boolean;
  };
}

export const useFullAddress = (): IFullAddressOutput => {
  const [state, setState] = useState<string>('');
  const [invalid, setInvalid] = useState<boolean>(true);

  const change = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;
    setState(value);
  };

  useEffect(() => {
    const next = !Boolean(state.length > 0);
    setInvalid(next);
  }, [state]);

  const tools = { change, invalid };

  return { state, tools };
};
