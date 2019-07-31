import getRandomInt from '../utils';
import engine from '../engine';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const generateRoundData = () => {
  const questionText = getRandomInt();
  const answer = isEven(questionText) ? 'yes' : 'no';

  return { questionText, answer };
};

export default () => engine(description, generateRoundData);
