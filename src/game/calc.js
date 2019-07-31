import getRandomIntInclusive from '../supportFunctions';
import engine from '../engine';

const showDescription = () => console.log('What is the result of the expression?');

const operators = ['+', '-', '*'];

const generateRoundData = (operations) => {
  const number1 = getRandomIntInclusive();
  const number2 = getRandomIntInclusive();
  const operation = operations[getRandomIntInclusive(0, operations.lenght - 1)];

  const expression = `${number1} ${operation} ${number2}`;
  // eslint-disable-next-line no-eval
  const answer = String(eval(expression));

  return { questionText: expression, answer };
};


export default () => engine(showDescription, generateRoundData(operators));
