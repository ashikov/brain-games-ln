import getRandomInt from '../utils';
import engine from '../engine';

const description = 'What is the result of the expression?';

const calculator = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const getOperator = (operatorsStorage) => {
  const operators = Object.keys(operatorsStorage);

  return operators[getRandomInt(0, operators.length - 1)];
};

const generateRoundData = operatorsStorage => () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const operation = getOperator(operatorsStorage);

  const expression = `${number1} ${operation} ${number2}`;

  const answer = String(operatorsStorage[operation](number1, number2));

  return { question: expression, answer };
};


export default () => engine(description, generateRoundData(calculator));
