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
jest.mock('react-helmet-async', () => ({
  Helmet: () => <div />,
}));

describe('Home', () => {
  it('Should render home', () => {
    render(<Home />);

    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
