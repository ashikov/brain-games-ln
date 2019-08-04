import getRandomInt from '../utils';
import engine from '../engine';

const description = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (number1, number2) => {
  if (!number2) {
    return number1;
  }

  return findGreatestCommonDivisor(number2, number1 % number2);
};

const generateRoundData = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();

  const question = `${number1} ${number2}`;
  const answer = String(findGreatestCommonDivisor(number1, number2));

  return { question, answer };
};

export default () => engine(description, generateRoundData);
