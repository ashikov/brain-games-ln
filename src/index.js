import readlineSync from 'readline-sync';

const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  return userName;
};

const getRandomIntInclusive = (minimumValue, maximumValue) => {
  const min = Math.ceil(minimumValue);
  const max = Math.floor(maximumValue);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

export { askUserName, getRandomIntInclusive, getAnswer };
