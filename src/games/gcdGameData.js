import { getRandomIntInclusive } from '..';

const description = () => {
    return console.log('Find the greatest common divisor of given numbers.');
};

const gcd = (a, b) => {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
};

const getQuestion = (min, max) => (message) => {
    const number1 = getRandomIntInclusive(min, max);
    const number2 = getRandomIntInclusive(min, max);

    switch (message) {
        case 'number1':
            return number1;
        case 'number2':
            return number2;
        case 'question':
            return `${number1} ${number2}`;
    }

};

const getSolution = () => String(gcd(getQuestion('number1'), getQuestion('number2')));

export { description, getQuestion, getSolution };