import { getRandomIntInclusive } from '..';

const description = () => console.log('What number is missing in the progression?');

const getSequenceArray = (startNumber, seqStep) => {
  const iter = (counter, step, acc) => {
    if (counter === 10) { // counter is the length of sequence
      return acc;
    }

    const preveousElement = acc[counter - 1];
    const currentElement = preveousElement + step;

    return iter(counter + 1, step, acc.concat(currentElement));
  };

  return iter(1, seqStep, [startNumber]);
};

const hideItem = (array, searchingItem) => array.map(x => (x === searchingItem ? x = '..' : x));

const gameData = (min, max) => () => {
  const startNumber = getRandomIntInclusive(min, max);
  const seqStep = getRandomIntInclusive(1, 10); // random sequence step from interval

  const seqArray = getSequenceArray(startNumber, seqStep);
  const seqArrayLength = seqArray.length;
  const randomIndex = getRandomIntInclusive(0, seqArrayLength - 1);
  const searchingItem = seqArray[randomIndex];

  const hideItemInArray = hideItem(seqArray, searchingItem);

  const questionText = hideItemInArray.join(' ');
  const result = String(searchingItem);

  return { questionText, result };
};

export { description, gameData };
