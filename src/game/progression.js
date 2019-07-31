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

const hideItem = (items, searchingItem) => items.map(x => (x === searchingItem ? '..' : x));

const generateRoundData = () => {
  const firstTerm = getRandomInt();
  const sequenceStep = getRandomInt(1, 10);
  const sequence = generateSequence(firstTerm, sequenceStep);
  const sequenceLength = sequence.length;
  const randomIndex = getRandomInt(0, sequenceLength - 1);
  const itemForHide = sequence[randomIndex];

  const hiddenItemInSequence = hideItem(sequence, itemForHide);

  const questionText = hiddenItemInSequence.join(' ');
  const answer = String(itemForHide);

  return { questionText, answer };
};

export default () => engine(description, generateRoundData);
