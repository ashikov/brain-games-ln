import { getRandomIntInclusive } from '..';

const description = () => {
    return console.log('What number is missing in the progression?');
};

const gameData = (min, max) => ()  => {
    let startNumber = getRandomIntInclusive(min, max);
    const seqStep = getRandomIntInclusive(1, 10); // random sequence step from interval

    let seqArray = [startNumber];

    for (let i = 0; i < 10; i += 1) {
        startNumber += seqStep;
        seqArray = seqArray.concat(startNumber);
    }

    console.log(seqArray); 
};

export { description, gameData };