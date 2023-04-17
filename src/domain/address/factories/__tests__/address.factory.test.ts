import { IAddress } from '../../interfaces';
import { AddressFactory } from '../address.factory';

describe('[factory] Address', () => {
  describe('SHOULD join address fields together', () => {
    test('WHEN a full address model is sent', () => {
      const address: IAddress = {
        number: '4600',
        street: 'Silver Hill Rd',
        city: 'Washington',
        state: 'DC',
        zipCode: '20233',
      };

      const result = AddressFactory.joinFromFields(address);

      expect(result).toEqual('4600 Silver Hill Rd, Washington, DC 20233');
    });

    test('WHEN a partial address model without city and state is sent', () => {
      const address: IAddress = {
        number: '4600',
        street: 'Silver Hill Rd',
        city: '',
        state: '',
        zipCode: '20233',
      };

      const result = AddressFactory.joinFromFields(address);

      expect(result).toEqual('4600 Silver Hill Rd 20233');
    });

    test('WHEN a partial address model without zipCode is sent', () => {
      const address: IAddress = {
        number: '4600',
        street: 'Silver Hill Rd',
        city: 'Washington',
        state: 'DC',
        zipCode: '',
      };

      const result = AddressFactory.joinFromFields(address);

      expect(result).toEqual('4600 Silver Hill Rd, Washington, DC');
    });
  });
});
