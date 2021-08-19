import { getUsers } from '.';
import mockedGetUsers from './__mocks__/getUsers.mock';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockedGetUsers),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

describe('Event Data Service', () => {
  it('Return Users Data', async () => {
    const usersDataList = await getUsers();
    expect(usersDataList).toEqual([
      {
        firstName: 'brad',
        largePicture: 'https://randomuser.me/api/portraits/men/75.jpg',
        lastName: 'gibson',
        phoneNumber: '011-962-7516',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
      },
    ]);
  });
});
