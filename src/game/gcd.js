import getRandomInt from '../utils';
import engine from '../engine';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }

  return findGCD(number2, number1 % number2);
};

const generateRoundData = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();

  const questionText = `${number1} ${number2}`;
  const answer = String(findGCD(number1, number2));

  return { questionText, answer };
};

export default () => engine(description, generateRoundData);
