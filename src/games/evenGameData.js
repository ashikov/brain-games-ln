import readlineSync from 'readline-sync';
import { getRandomIntInclusive } from '..';

const description = () => {
    return console.log('Answer "yes" if number even otherwise answer "no".');
};

const isEven = (num) => num % 2 === 0;

const getQuestion = (min, max) => () => {
    return getRandomIntInclusive(min, max);
};

const getAnswer = (question) => {
    console.log(`Question: ${question}`);
    return readlineSync.question(`Your answer: `);
};

const getSolution = (question) => isEven(question) ? 'yes' : 'no';

export { description, getQuestion, getAnswer, getSolution };
