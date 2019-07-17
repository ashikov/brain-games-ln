import { askUserName } from ".";

const engine = (description, getQuestion, getAnswer, getSolution, rounds) => {
    console.log('Welcome to the Brain Games!');
    description();

    const userName = askUserName();

    for (let i = 1; i <= rounds; i += 1) {
        const question = getQuestion();
        const answer = getAnswer(question);
        const solution = getSolution(question);

        if (i === rounds && solution === answer) {
            console.log('Correct!');
            console.log(`Congratilations, ${userName}!`);
        } else if (solution === answer) {
            console.log('Correct!');
        } else { 
            console.log(`'${answer}' is wrong answer ;(. Correct was '${solution}'`);
            console.log(`Let's try again, ${userName}!`);
            break;
        }
    }
};

export default engine;
