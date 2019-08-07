import getRandomInt from '../utils';
import engine from '../engine';

const description = 'What is the result of the expression?';

const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const generateRoundData = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const operators = Object.keys(operations);
  const operation = operators[getRandomInt(0, operators.length - 1)];

  const question = `${number1} ${operation} ${number2}`;

  const answer = String(operations[operation](number1, number2));

  return { question, answer };
};


export default () => engine(description, generateRoundData);
