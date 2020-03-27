import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders explanation to the user', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Wordmap creation just got easier.../);
  expect(linkElement).toBeInTheDocument();
});
