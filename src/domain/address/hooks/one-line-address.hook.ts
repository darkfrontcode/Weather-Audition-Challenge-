import { useState } from 'react';

export interface IOnelineAddressOutput {
  state: string;
  change: (next: string) => void;
}

export const useOnelineAddress = (): IOnelineAddressOutput => {
  const [state, setState] = useState<string>('');
  const change = (next: string) => setState(next);

  return { state, change };
};
