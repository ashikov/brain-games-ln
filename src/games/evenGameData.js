import getRandomIntInclusive from '../supportFunctions';
import engine from '../engine';

const description = () => console.log('Answer "yes" if number even otherwise answer "no".');

const isEven = num => num % 2 === 0;

const generateRoundData = () => {
  const question = getRandomIntInclusive();
  const answer = isEven(question) ? 'yes' : 'no';

  return { questionText: question, answer };
};

export default () => engine(description, generateRoundData);
