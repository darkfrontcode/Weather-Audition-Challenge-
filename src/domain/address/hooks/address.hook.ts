import {
  ICompositeAddressOutput,
  useCompositeAddress,
} from './composite-address.hooks';
import {
  IOnelineAddressOutput,
  useOnelineAddress,
} from './one-line-address.hook';

export interface IAddressOutput {
  oneline: IOnelineAddressOutput;
  composite: ICompositeAddressOutput;
}

export const useAddress = (): IAddressOutput => {
  const oneline = useOnelineAddress();
  const composite = useCompositeAddress();

  return { oneline, composite };
};
