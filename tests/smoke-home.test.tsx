import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';

test('renders hero headline', () => {
  render(<Hero />);
  expect(screen.getByText(/Turn/i)).toBeInTheDocument();
  expect(screen.getByText(/revenue/i)).toBeInTheDocument();
});