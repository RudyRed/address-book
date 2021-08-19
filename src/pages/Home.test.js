import { render, screen } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import mockedGetUsers from './__mocks__/Home-getUsers.mock';

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

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockedGetUsers),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

const setup = (overrides) => {
  const props = {
    ...overrides,
  };
  return {
    ...render(
      <Router>
        <Home />
      </Router>,
    ),
    props,
  };
};

describe('Home', () => {
  it('Should render home', async () => {
    setup();

    expect(await screen.findByText('Address Book')).toBeInTheDocument();
  });

  it('Should fetch and render users via ListItems', async () => {
    const { findAllByTestId } = setup();

    const listItems = await findAllByTestId('List-ListItems');

    expect(listItems.length).toEqual(30);
  });
});
