import { COLORS } from './constants';
import { Category, Difficulty, Problem } from './types';

export const getRandomColor = (): string => {
  const random = Math.floor(Math.random() * COLORS.length);
  return COLORS[random];
};

export const getRandomNumber = (difficulty: Difficulty): number => {
  console.log('getNumber:');
  const max =
    difficulty === Difficulty.EASY
      ? 5
      : difficulty === Difficulty.MEDIUM
      ? 9
      : 13;
  console.log('max:', max);
  const min = max - 5;
  const random = Math.floor(Math.random() * (max - min)) + min;
  return random;
};

export const getMultiplicationProblem = (difficulty: Difficulty): Problem => {
  console.log('getMultiplication difficulty:', difficulty);
  const firstNum = getRandomNumber(difficulty);
  const secondNum = getRandomNumber(difficulty);
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

export const getDivisionProblem = (difficulty: Difficulty): Problem => {
  console.log('getDivision difficulty:', difficulty);
  const secondNum = getRandomNumber(difficulty);
  const answer = getRandomNumber(difficulty);
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

export const getRandomProblem = (difficulty: Difficulty): Problem => {
  const random = Math.floor(Math.random() * 2);

  if (random === 0) return getMultiplicationProblem(difficulty);
  else return getDivisionProblem(difficulty);
};

export const getProblem = (
  category: Category,
  difficulty: Difficulty
): Problem => {
  switch (category) {
    case Category.MULTIPLICATION:
      return getMultiplicationProblem(difficulty);
    case Category.DIVISION:
      return getDivisionProblem(difficulty);
    case Category.ALL:
    default:
      return getRandomProblem(difficulty);
  }
};
