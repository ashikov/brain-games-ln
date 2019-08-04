import getRandomInt from '../utils';
import engine from '../engine';

const description = 'What number is missing in the progression?';

const sequenceLength = 10;

const generateSequence = (firstTerm, sequenceStep) => {
  const iter = (currentTerm, acc) => {
    if (acc.length === sequenceLength) {
      return acc;
    }

    return iter(currentTerm + sequenceStep, acc.concat(currentTerm));
  };

  return iter(firstTerm, []);
};

const generateRoundData = () => {
  const firstTerm = getRandomInt();
  const sequenceStep = getRandomInt(1, 10);
  const sequence = generateSequence(firstTerm, sequenceStep);
  const randomIndex = getRandomInt(0, sequence.length - 1);

  const answer = String(sequence[randomIndex]);

  sequence[randomIndex] = '..';

  const question = sequence.join(' ');

  return { question, answer };
};

export default () => engine(description, generateRoundData);
