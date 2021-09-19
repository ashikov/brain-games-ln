import getRandomInt from '../utils.js';
import engine from '../engine.js';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const generateRoundData = () => {
  const question = getRandomInt();
  const answer = isEven(question) ? 'yes' : 'no';

  return { question, answer };
};

export default () => engine(description, generateRoundData);
