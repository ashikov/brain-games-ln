import getRandomIntInclusive from '../supportFunctions';
import engine from '../engine';

const description = () => console.log('What is the result of the expression?');

const generateRoundData = () => {
  const number1 = getRandomIntInclusive();
  const number2 = getRandomIntInclusive();
  const operations = ['+', '-', '*'];
  const operationsQuantity = operations.length;
  const operation = operations[getRandomIntInclusive(0, operationsQuantity - 1)];

  const expression = `${number1} ${operation} ${number2}`;
  // eslint-disable-next-line no-eval
  const answer = String(eval(expression));

  return { questionText: expression, answer };
};


export default () => engine(description, generateRoundData);
