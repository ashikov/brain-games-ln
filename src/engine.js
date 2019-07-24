import readlineSync from 'readline-sync';

const engine = (description, generateRoundData, numberOfRounds = 3) => {
  console.log('Welcome to the Brain Games!');
  description();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const roundData = generateRoundData();
    const rightAnswer = roundData.answer;

    console.log(`Question: ${roundData.questionText}`);
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
