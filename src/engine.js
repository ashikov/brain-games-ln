import readlineSync from 'readline-sync';

const engine = (description, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const roundsCount = 3;

  for (let roundsCounter = 1; roundsCounter <= roundsCount; roundsCounter += 1) {
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
