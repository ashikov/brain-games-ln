#!/usr/bin/node

import engine from '../engine';
import { description, gameData } from '../games/calcGameData';
import { getAnswer } from '..';

engine(
  description,
  gameData(1, 10), // specify the interval for random
  getAnswer,
  3,
);
