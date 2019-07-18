#!/usr/bin/node

import engine from '../engine';
import { description, getQuestion, getSolution } from '../games/gcdGameData';
import { getAnswer } from '..';

engine(
    description,
    getQuestion(1, 10), //specify the interval for random
    getAnswer,
    getSolution,
    3,
);