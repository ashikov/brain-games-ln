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

const getQuestion = (min, max) => () => {
    const number1 = getRandomIntInclusive(min, max);
    const number2 = getRandomIntInclusive(min, max);

    return `${number1} ${number2}`;
};

const getSolution = () => {
    gcd();
};

export { description, getQuestion, getSolution };