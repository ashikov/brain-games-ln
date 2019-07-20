#!/usr/bin/node

import engine from '../engine';
import { description, gameData } from '../games/progressionGameData';
import { getAnswer } from '..';

engine(
    description,
    gameData(1, 47), //specify the interval for random
    getAnswer,
    3,
);