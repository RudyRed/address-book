import { render, screen, waitFor } from '@testing-library/react';

import App from './App';
import mockedGetUsers from './__mocks__/App-getUsers.mock';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockedGetUsers),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

describe('App', () => {
  it('Should render', async () => {
    render(<App />);

    expect(await screen.findByText('Address Book')).toBeInTheDocument();
  });

  it('matches snapshot', async () => {
    const { container } = render(<App />);

    await waitFor(() => expect(container).toMatchSnapshot());
  });
});
