import { SEED } from './constants';

export default async (index = 0) => {
  const response = await fetch(
    `https://randomuser.me/api/?results=1&page=${
      index + 1
    }&seed=${SEED}&inc=picture,name,phone`,
  );
  const parsedResponse = await response.json();

  const [user] = parsedResponse.results;

  return {
    firstName: user.name.first,
    lastName: user.name.last,
    phoneNumber: user.phone,
    largePicture: user.picture.large,
  };
};
