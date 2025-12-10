import { render, screen } from '@testing-library/react';
import Home from '../pages';

// You can also inline mock instead of using __mocks__ folder
jest.mock('next/font/google', () => ({
  Geist: () => ({ className: 'mock-geist-sans' }),
  Geist_Mono: () => ({ className: 'mock-geist-mono' }),
}));

describe('Home Page', () => {
  it('renders headings correctly', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to;')).toBeInTheDocument();
    expect(screen.getByText('Smart Mess Management')).toBeInTheDocument();
  });
});
