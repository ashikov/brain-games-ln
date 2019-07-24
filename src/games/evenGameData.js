import { getRandomIntInclusive } from '..';

const description = () => console.log('Answer "yes" if number even otherwise answer "no".');

const isEven = num => num % 2 === 0;

const gameData = (min, max) => () => {
  const number = getRandomIntInclusive(min, max);
  const result = isEven(number) ? 'yes' : 'no';

  return { questionText: number, result };
};

export { description, gameData };
