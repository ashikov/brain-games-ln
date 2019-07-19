import { getRandomIntInclusive } from '..';

const description = () => {
    return console.log('What is the result of the expression?');
};

const getOperation = () => {
    const operationsQuantity = 3; // specify operations quantity in switch statement
    const selector = getRandomIntInclusive(1, operationsQuantity);
    
    switch (selector) {
        case 1:
            return '+';
        case 2:
            return '-';
        case 3:
            return '*';
    }
};

const question = (min, max) => () => {
    const number1 = getRandomIntInclusive(min, max);
    const number2 = getRandomIntInclusive(min, max);
    const operation = getOperation();

    const expression = `${number1} ${operation} ${number2}`;
    const result = String(eval(expression));

    return { 'text': expression, 'result': result };
};


export { description, question };