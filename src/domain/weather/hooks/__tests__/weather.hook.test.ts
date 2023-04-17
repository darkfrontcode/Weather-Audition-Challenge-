import { renderHook, act } from '@testing-library/react-hooks';
import { IPeriod } from '../..';
import { useWeather } from '../weather.hook';

describe('[hook] Weather', () => {
  describe('SHOULD save forecast weather', () => {
    test('WHEN a change happens', () => {
      const { result } = renderHook(() => useWeather());
      expect(result.current.forecast).toEqual([]);

      act(() => {
        result.current.change([{} as IPeriod]);
      });

      expect(result.current.forecast).not.toEqual([]);
    });
  });
});
