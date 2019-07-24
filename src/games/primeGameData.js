import getRandomIntInclusive from '../supportFunctions';
import engine from '../engine';

const description = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (number) => {
  if (number === 1 || number === 2) {
    return true;
  }

  for (let i = number - 1; i >= 2; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRoundData = () => {
  const question = getRandomIntInclusive();
  const answer = isPrime(question) ? 'yes' : 'no';

  return { questionText: String(question), answer };
};

export default () => engine(description, generateRoundData);
