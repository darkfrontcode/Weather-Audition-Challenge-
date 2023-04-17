import { renderHook, act } from '@testing-library/react-hooks';
import { useAddress } from '../address.hook';

describe('[hook] Address', () => {
  describe('SHOULD save address', () => {
    test('WHEN a change happens', () => {
      const { result } = renderHook(() => useAddress());
      expect(result.current.oneline.state).toEqual('');
      expect(result.current.composite.state).toEqual(undefined);

      act(() => {
        result.current.oneline.change(
          '4600 Silver Hill Rd, Washington, DC 20233'
        );
        result.current.composite.change({
          number: '4600',
          street: 'Silver Hill Rd',
          city: 'Washington',
          state: 'DC',
          zipCode: '20233',
        });
      });

      expect(result.current.oneline.state).not.toEqual('');
      expect(result.current.oneline.state).toEqual(
        '4600 Silver Hill Rd, Washington, DC 20233'
      );
      expect(result.current.composite.state).not.toEqual(undefined);
      expect(result.current.composite.state).toEqual({
        city: 'Washington',
        number: '4600',
        state: 'DC',
        street: 'Silver Hill Rd',
        zipCode: '20233',
      });
    });
  });
});
