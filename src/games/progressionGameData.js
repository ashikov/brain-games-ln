import getRandomIntInclusive from '../supportFunctions';
import engine from '../engine';

const showDescription = () => console.log('What number is missing in the progression?');

const generateSequence = (startNumber, sequenceStep, sequenceLength = 10) => {
  const iter = (counter, step, acc) => {
    if (counter === sequenceLength) {
      return acc;
    }

    const preveousElement = acc[counter - 1];
    const currentElement = preveousElement + step;

    return iter(counter + 1, step, acc.concat(currentElement));
  };

  return iter(1, sequenceStep, [startNumber]);
};

const hideItem = (array, searchingItem) => array.map(x => (x === searchingItem ? '..' : x));

const generateRoundData = () => {
  const startNumber = getRandomIntInclusive();
  const sequenceStep = getRandomIntInclusive(1, 10);
  const sequence = generateSequence(startNumber, sequenceStep);
  const sequenceLength = sequence.length;
  const randomIndex = getRandomIntInclusive(0, sequenceLength - 1);
  const itemForHide = sequence[randomIndex];

  const hideItemInSequence = hideItem(sequence, itemForHide);

  const questionText = hideItemInSequence.join(' ');
  const answer = String(itemForHide);

  return { questionText, answer };
};

export default () => engine(showDescription, generateRoundData);
