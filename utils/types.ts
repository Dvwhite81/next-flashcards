export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export enum Category {
  MULTIPLICATION = 'multiplication',
  DIVISION = 'division',
  ALL = 'all',
}

export type Question = {
  firstNum: number;
  secondNum: number;
  category: Category;
};

export type Problem = {
  question: Question;
  answer: number;
};

export type NavItem = {
  id: number;
  text: string;
  path: string;
};
