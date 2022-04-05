import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without errors', () => {
  expect(()=>render(<App />)).not.toThrow();
});
