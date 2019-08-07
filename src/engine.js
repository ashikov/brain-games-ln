import readlineSync from 'readline-sync';

const roundsCount = 3;

const engine = (description, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, answer: rightAnswer } = generateRoundData();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratilations, ${userName}!`);
};

export default engine;
