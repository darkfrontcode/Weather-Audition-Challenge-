import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test.skip('renders App with title', () => {
  const { getByText } = render(<App />);
  expect(getByText('Weather ( Audition/Challenge )')).toBeInTheDocument();
});
