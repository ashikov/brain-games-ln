#!/usr/bin/node

import askUserName from '..';

export const greeting = () => {
    console.log('Welcome to the Brain Games!');

    askUserName();
};

greeting();
