import { getUser } from '.';
import mockedGetUser from './__mocks__/getUser.mock';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockedGetUser),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

describe('User Data Service', () => {
  it('Return User Data', async () => {
    const userDataList = await getUser();

    expect(userDataList).toEqual({
      firstName: 'brad',
      lastName: 'gibson',
      phoneNumber: '011-962-7516',
      largePicture: 'https://randomuser.me/api/portraits/men/75.jpg',
    });
  });
});
