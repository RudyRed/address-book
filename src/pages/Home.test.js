/**
 * @file Navigation component tests.
 */

import { render, screen } from '@testing-library/react';

import Home from './Home';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('Navigation', () => {
  it('Should render navigation', () => {
    render(<Home />);

    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
