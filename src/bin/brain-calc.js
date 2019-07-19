#!/usr/bin/node

import engine from '../engine';
import { description, question } from '../games/calcGameData';
import { getAnswer } from '..';

engine(
    description,
    question(1, 10), //specify the interval for random
    getAnswer,
    3,
);