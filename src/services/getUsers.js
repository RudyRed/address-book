import { NUMBER_PER_PAGE, SEED } from './constants';

export default async () => {
  const response = await fetch(
    `https://randomuser.me/api/?results=${NUMBER_PER_PAGE}&seed=${SEED}`,
  );
  const parsedResponse = await response.json();

  return parsedResponse.results.map(({ name }) => ({
    text: `${name.first} ${name.last}`,
  }));
};
