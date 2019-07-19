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

const question = (min, max) => ()  => {
    const number1 = getRandomIntInclusive(min, max);
    const number2 = getRandomIntInclusive(min, max);

    const questionText = `${number1} ${number2}`;
    const result = String(gcd(number1, number2));
    
    return { 'text': questionText, 'result': result };
};

export { description, question };
