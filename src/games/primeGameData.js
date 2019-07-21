import { getRandomIntInclusive } from '..';

const description = () => {
    return console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const isPrime = (number) => {
    if (number === 1 || number === 2) {
        return true;
    }

    for (let i = number - 1; i >= 2; i -= 1) {
        if ( number % i === 0 ) {
            return false;
        }
    }

    return true;
};

const gameData = (min, max) => () => {
    const number = getRandomIntInclusive(min, max);
    const result = isPrime(number) ? 'yes' : 'no';
    
    return { 'questionText': String(number), 'result': result }
};

export { description, gameData };
