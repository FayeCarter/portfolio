import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders with `Faye Carter` title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Faye Carter/i);
  expect(linkElement).toBeInTheDocument();
});
