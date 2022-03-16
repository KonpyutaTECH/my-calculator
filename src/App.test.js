import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Calculator link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
