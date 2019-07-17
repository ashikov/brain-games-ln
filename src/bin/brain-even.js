#!/usr/bin/node

import engine from '../engine';
import {description, getQuestion, getAnswer, getSolution} from '../games/evenGameData';

engine(
    description,
    getQuestion(1, 50), // specify the interval for random
    getAnswer,
    getSolution,
    3,
    );
