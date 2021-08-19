import { render, screen } from '@testing-library/react';

import Details from './Details';

jest.mock('react-helmet-async', () => ({
  Helmet: () => <div />,
}));

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
  it('Should render details', async () => {
    setup();

    expect(await screen.findByText('Details')).toBeInTheDocument();
  });
});
