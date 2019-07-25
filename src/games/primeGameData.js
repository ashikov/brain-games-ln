import getRandomIntInclusive from '../supportFunctions';
import engine from '../engine';

const showDescription = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (number) => {
  if (number === 2) {
    return true;
  }

  const division = Math.floor(Math.sqrt(number));

  for (let divisor = 2; divisor <= division; divisor += 1) {
    if (number % divisor === 0) {
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

export default () => engine(showDescription, generateRoundData);
