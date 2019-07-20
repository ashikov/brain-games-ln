import { getRandomIntInclusive } from '..';

const description = () => {
    return console.log('Answer "yes" if number even otherwise answer "no".');
};

const isEven = (num) => num % 2 === 0;

const gameData = (min, max) => () => {
    const number = getRandomIntInclusive(min, max);
    const result = isEven(number) ? 'yes' : 'no';

    return { 'questionText': number, 'result': result};
};

export { description, gameData };
