import { useState } from 'react';
import { IAddress } from '../interfaces';

export interface ICompositeAddressOutput {
  state?: IAddress;
  change: (next: IAddress) => void;
}

export const useCompositeAddress = (): ICompositeAddressOutput => {
  const [state, setState] = useState<IAddress>();
  const change = (next: IAddress) => setState(next);

  return { state, change };
};
