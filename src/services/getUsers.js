import { NUMBER_PER_PAGE, SEED } from './constants';

export default async () => {
  const response = await fetch(
    `https://randomuser.me/api/?results=${NUMBER_PER_PAGE}&page=1&seed=${SEED}&inc=picture,name,phone`,
  );
  const parsedResponse = await response.json();

  return parsedResponse.results.map(({ name, picture, phone }) => ({
    firstName: name.first,
    lastName: name.last,
    thumbnail: picture.thumbnail,
    largePicture: picture.large,
    phoneNumber: phone,
  }));
};
