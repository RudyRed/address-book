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
    expect(usersDataList).toEqual([{ text: 'brad gibson' }]);
  });
});
