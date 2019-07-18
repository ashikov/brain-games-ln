import readlineSync from 'readline-sync';

const askUserName = () => {
    const userName = readlineSync.question('May I have your name? ');
    
    console.log(`Hello, ${userName}!`);

    return userName;
};

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

export { askUserName, getRandomIntInclusive };