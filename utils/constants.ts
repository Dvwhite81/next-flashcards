import { Category, Difficulty, NavItem } from './types';

export const COLORS = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'blueviolet',
];

export const CATEGORY_OPTIONS = [
  { label: 'Multiplication', value: Category.MULTIPLICATION },
  { label: 'Random', value: Category.ALL },
  { label: 'Division', value: Category.DIVISION },
];

export const DIFFICULTY_OPTIONS = [
  { label: 'Easy', value: Difficulty.EASY },
  { label: 'Medium', value: Difficulty.MEDIUM },
  { label: 'Hard', value: Difficulty.HARD },
];

export const NAV_ITEMS: NavItem[] = [
  { id: 1, text: 'Home', path: '/' },
  { id: 2, text: 'Flashcards', path: '/flashcards' },
  { id: 3, text: 'Quiz', path: '/quiz' },
];
