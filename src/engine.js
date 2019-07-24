import { askUserName } from '.';

const engine = (description, gameData, getAnswer, rounds) => {
    console.log('Welcome to the Brain Games!');
    description();

    const userName = askUserName();

    for (let i = 1; i <= rounds; i += 1) {
        const gameDataArray = gameData();
        const answer = getAnswer(gameDataArray.questionText);
        const result = gameDataArray.result;

        if (i === rounds && result === answer) {
            console.log('Correct!');
            console.log(`Congratilations, ${userName}!`);
        } else if (result === answer) {
            console.log('Correct!');
        } else { 
            console.log(`'${answer}' is wrong answer ;(. Correct was '${result}'`);
            console.log(`Let's try again, ${userName}!`);
            break;
        }
    }
};

export default engine;
