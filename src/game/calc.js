import getRandomInt from '../utils';
import engine from '../engine';

const description = 'What is the result of the expression?';

const operators = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const generateRoundData = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const operation = Object.keys(operators)[getRandomInt(0, Object.keys(operators).length - 1)];

  const question = `${number1} ${operation} ${number2}`;

  const answer = String(operators[operation](number1, number2));

  return { question, answer };
};


export default () => engine(description, generateRoundData);
