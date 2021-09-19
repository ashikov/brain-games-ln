import getRandomInt from '../utils.js';
import engine from '../engine.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let divisor = 3; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const generateRoundData = () => {
  const question = getRandomInt();
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question: String(question), answer };
};

export default () => engine(description, generateRoundData);
