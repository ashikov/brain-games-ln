#!/usr/bin/node

import { askUserName, isEven, randomIntFromInterval } from '..';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const userName = askUserName();

for (let i = 0; i < 3; i += 1) {
    const number = randomIntFromInterval(1, 20);
    let answer = readlineSync.question(`Question: ${number} `);
    let numIsEven = 'yes';

    isEven(number) ? numIsEven : numIsEven = 'no';

    if (i === 2 && numIsEven === answer) {
        console.log('Correct!');
        console.log(`Congratilations, ${userName}!`);
    } else if (numIsEven === answer) {
        console.log('Correct!');
    } else { 
        console.log(`'${answer}' is wrong answer ;(. Correct was '${numIsEven}'\nLet's try again, ${userName}!`);
        break;
    }
}




