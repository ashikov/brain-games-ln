#!/usr/bin/node

import engine from '../engine';
import { description, gameData } from '../games/evenGameData';
import { getAnswer } from '..';

engine(
  description,
  gameData(1, 50), // specify the interval for random
  getAnswer,
  3,
);
