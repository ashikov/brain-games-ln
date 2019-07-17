import readlineSync from 'readline-sync';

const askUserName = () => {
    const userName = readlineSync.question('May I have your name? ');
    
    console.log(`Hello, ${userName}!`);

    return userName;
};

const isEven = (num) => num % 2 === 0;

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export { askUserName, isEven, randomIntFromInterval };