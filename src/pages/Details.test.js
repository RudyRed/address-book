import { render, screen } from '@testing-library/react';

import Details from './Details';
import mockedGetUsers from './__mocks__/Home-getUsers.mock';

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
    ...render(<Details />),
    props,
  };
};

describe('Details', () => {
  it('Should render Details page', async () => {
    setup();

    expect(await screen.findByText('Details')).toBeInTheDocument();
  });

  it('Should fetch and render user via PeopleCard', async () => {
    const { findByText } = setup();

    expect(await findByText('(64) 6431-7116')).toBeInTheDocument();
  });
});
