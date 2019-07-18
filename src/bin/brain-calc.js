#!/usr/bin/node

import engine from '../engine';
import {description, getQuestion, getAnswer, getSolution} from '../games/calcGameData';

engine(
    description,
    getQuestion(1, 10), //specify the interval for random
    getAnswer,
    getSolution,
    3,
    );