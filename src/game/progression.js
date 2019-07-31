import getRandomInt from '../utils';
import engine from '../engine';

const description = 'What number is missing in the progression?';

const generateSequence = (startNumber, sequenceStep) => {
  const iter = (counter, step, acc) => {
    const sequenceLength = 10;

    if (counter === sequenceLength) {
      return acc;
    }

    const preveousElement = acc[counter - 1];
    const currentElement = preveousElement + step;

    return iter(counter + 1, step, acc.concat(currentElement));
  };

  return iter(1, sequenceStep, [startNumber]);
};

const generateRoundData = () => {
  const firstTerm = getRandomInt();
  const sequenceStep = getRandomInt(1, 10);
  const sequence = generateSequence(firstTerm, sequenceStep);
  const randomIndex = getRandomInt(0, sequence.length - 1);

  const answer = String(sequence[randomIndex]);

  sequence[randomIndex] = '..';

  const questionText = sequence.join(' ');

  return { questionText, answer };
};

export default () => engine(description, generateRoundData);
