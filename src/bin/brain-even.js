#!/usr/bin/node

import engine from '../engine';
import { description, question } from '../games/evenGameData';
import { getAnswer } from '..';

engine(
    description,
    question(1, 50), // specify the interval for random
    getAnswer,
    3,
);
