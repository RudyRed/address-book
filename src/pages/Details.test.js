import { render, screen, waitFor } from '@testing-library/react';

import Details from './Details';
import mockedGetUser from './__mocks__/Details-getUser.mock';
import PersonContext from '../components/PersonContext';

jest.mock('react-helmet-async', () => ({
  Helmet: () => <div />,
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockedGetUser),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

const personContextData = {
  largePicture: 'personContextData-largePicture',
  firstName: 'personContextData-firstName',
  lastName: 'personContextData-lastName',
  phoneNumber: 'personContextData-phoneNumber',
};

const setContextMock = jest.fn();

const setup = (overrides, initialProviderValue = personContextData) => {
  const props = {
    ...overrides,
  };
  return {
    ...render(
      <PersonContext.Provider value={[initialProviderValue, setContextMock]}>
        <Details />
      </PersonContext.Provider>,
    ),
    props,
  };
};

describe('Details', () => {
  it('Should render Details page', async () => {
    setup();

    expect(await screen.findByText('Details')).toBeInTheDocument();
  });

  it('Should fetch and render user via PeopleCard', async () => {
    setup({}, null);

    await waitFor(() =>
      expect(setContextMock).toBeCalledWith({
        firstName: 'Areta',
        largePicture: 'https://randomuser.me/api/portraits/women/66.jpg',
        lastName: 'Araújo',
        phoneNumber: '(64) 6431-7116',
      }),
    );
  });
});
