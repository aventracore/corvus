import { render, screen } from '@testing-library/react';
import DashboardPage from '@/app/dashboard/page';

jest.mock('next/dynamic', () => {
  const React = require('react');
  return (loader: any) => () => React.createElement('div');
});

test('renders dashboard after login', () => {
  window.localStorage.setItem('pt_demo_logged_in', 'true');
  const { container } = render(<DashboardPage />);
  expect(screen.getByText(/Followers/i)).toBeInTheDocument();
  expect(container).toBeTruthy();
});