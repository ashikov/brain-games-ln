#!/usr/bin/node

import engine from '../engine';
import { description, getQuestion, getSolution } from '../games/evenGameData';
import { getAnswer } from '..';

engine(
    description,
    getQuestion(1, 50), // specify the interval for random
    getAnswer,
    getSolution,
    3,
);
