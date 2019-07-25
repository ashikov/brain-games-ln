import getRandomIntInclusive from '../supportFunctions';
import engine from '../engine';

const showDescription = () => console.log('Find the greatest common divisor of given numbers.');

const findGCD = (a, b) => {
  if (!b) {
    return a;
  }

  return findGCD(b, a % b);
};

const generateRoundData = () => {
  const number1 = getRandomIntInclusive();
  const number2 = getRandomIntInclusive();

  const questionText = `${number1} ${number2}`;
  const answer = String(findGCD(number1, number2));

  return { questionText, answer };
};

export default () => engine(showDescription, generateRoundData);
