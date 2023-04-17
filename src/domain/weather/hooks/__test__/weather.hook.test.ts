import { renderHook } from '@testing-library/react-hooks';
import { useWeather } from '../weather.hook';

describe('[hook] Weather', () => {
  describe('SHOULD save forecast weather', () => {
    test('WHEN a change happens', () => {
      const { result, rerender } = renderHook(() => useWeather());
      expect(result.current.forecast).toEqual([]);
    });
  });
});
