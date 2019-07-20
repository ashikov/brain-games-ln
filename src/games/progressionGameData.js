import { getRandomIntInclusive } from '..';

const description = () => {
    return console.log('What number is missing in the progression?');
};

const getSequenceArray = (startNumber, seqStep) => {
    const iter = (counter, seqStep, acc) => {
        if (counter === 10) { // counter is the length of sequence
            return acc;
        }
        
        const preveousElement = acc[counter - 1];
        const currentElement = preveousElement + seqStep;

        return iter(counter + 1, seqStep, acc.concat(currentElement));
    };

    return iter(1, seqStep, [startNumber]);
};

const hideItem = (array, searchingItem) => {
    return array.map( x => x === searchingItem ? x = '..' : x );
};

const gameData = (min, max) => () => {
    const startNumber = getRandomIntInclusive(min, max);
    const seqStep = getRandomIntInclusive(1, 10); // random sequence step from interval

    const seqArray = getSequenceArray(startNumber, seqStep);
    const seqArrayLength = seqArray.length;
    const randomIndex = getRandomIntInclusive(0, seqArrayLength - 1);
    const searchingItem = seqArray[randomIndex];

    const hidedItemArray = hideItem(seqArray, searchingItem);

    const questionText = hidedItemArray.join(' ');
    const result = String(searchingItem);

    return { 'questionText': questionText, 'result': result };
}; 

export { description, gameData };