#!/usr/bin/node

import engine from '../engine';
import { description, gameData } from '../games/primeGameData';
import { getAnswer } from '..';

engine(
  description,
  gameData(1, 20), // specify the interval for random
  getAnswer,
  3,
);
