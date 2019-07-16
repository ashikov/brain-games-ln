import readlineSynch from '../node_modules/readline-sync/lib/readline-sync.js';

const askUserName = () => {
    const userName = readlineSynch.question('May I have your name? ');
    
    console.log(`Hello, ${userName}!`);
};

export default askUserName;
