import readlineSync from 'readline-sync';

const description = () => {
    return console.log('Answer "yes" if number even otherwise answer "no".');
};

const isEven = (num) => num % 2 === 0;

const getQuestion = (min, max) => () => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const getAnswer = (getQuestion) => {
    return readlineSync.question(`Question: ${getQuestion} `);
};

const getSolution = (question) => isEven(question) ? 'yes' : 'no';

export { description, getQuestion, getAnswer, getSolution };
