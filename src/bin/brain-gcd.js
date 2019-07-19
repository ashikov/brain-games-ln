#!/usr/bin/node

import engine from '../engine';
import { description, question } from '../games/gcdGameData';
import { getAnswer } from '..';

engine(
    description,
    question(1, 47), //specify the interval for random
    getAnswer,
    3,
);