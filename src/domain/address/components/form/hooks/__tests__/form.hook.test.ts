import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../form.hook';

console.log = jest.fn();
console.error = jest.fn();

describe('[hook] Form', () => {
  describe('SHOULD fulfil a address form', () => {
    test('WHEN a field is typed', () => {
      const { result } = renderHook(() => useForm());

      const fields = Object.values(result.current.state).every(
        (value) => value === String()
      );

      expect(fields).toBe(true);

      const writer = [
        {
          target: { name: 'number', value: '4600' },
        },
        {
          target: { name: 'street', value: 'Silver Hill Rd' },
        },
        {
          target: { name: 'city', value: 'Washington' },
        },
        {
          target: { name: 'state', value: 'DC' },
        },
        {
          target: { name: 'zipCode', value: '20233' },
        },
      ];

      writer.forEach((event) => {
        act(() => {
          result.current.tools.change(event as any);
        });
      });

      expect(result.current.state).toEqual({
        number: '4600',
        street: 'Silver Hill Rd',
        city: 'Washington',
        state: 'DC',
        zipCode: '20233',
      });
    });
  });
});
