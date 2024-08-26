import { COLORS, DIRECTIONS } from './constants';
import { Category, Problem } from './types';

export const getRandomColor = (): string => {
  const random = Math.floor(Math.random() * COLORS.length);
  return COLORS[random];
};

export const getRandomNumber = (): number => {
  console.log('getNumber:');
  const random = Math.floor(Math.random() * 13);
  return random;
};

export const getMultiplicationProblem = (): Problem => {
  console.log('getMultiplication');
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const category = Category.MULTIPLICATION;
  const answer = firstNum * secondNum;

  const question = {
    firstNum,
    secondNum,
    category,
  };

  return {
    question,
    answer,
  };
};

export const getDivisionProblem = (): Problem => {
  console.log('getDivision');
  const secondNum = getRandomNumber();
  const answer = getRandomNumber();
  const firstNum = secondNum * answer;
  const category = Category.DIVISION;

  const question = {
    firstNum,
    secondNum,
    category,
  };

  return {
    question,
    answer,
  };
};

export const getRandomProblem = (): Problem => {
  const random = Math.floor(Math.random() * 2);

  if (random === 0) return getMultiplicationProblem();
  else return getDivisionProblem();
};

export const getProblem = (category: Category): Problem => {
  switch (category) {
    case Category.MULTIPLICATION:
      return getMultiplicationProblem();
    case Category.DIVISION:
      return getDivisionProblem();
    case Category.ALL:
    default:
      return getRandomProblem();
  }
};
