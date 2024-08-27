'use client';
import { useEffect, useState } from 'react';
import { FaGear } from 'react-icons/fa6';
import { getProblem } from '@/utils/helpers';
import { Category, Difficulty, Problem } from '@/utils/types';
import { CATEGORY_OPTIONS, DIFFICULTY_OPTIONS } from '@/utils/constants';

import ButtonContainer from '@/components/buttons/ButtonContainer';
import Card from '@/components/flashcards/Card';
import Button from '@/components/buttons/Button';
import DifficultyBtns from '@/components/buttons/DifficultyBtns';
import CategoryBtns from '@/components/buttons/CategoryBtns';

export default function FlashCardsPage() {
  const [isClient, setIsClient] = useState(false);
  const [category, setCategory] = useState<Category>(Category.MULTIPLICATION);
  const [difficulty, setDifficulty] = useState(Difficulty.EASY);
  const [problem, setProblem] = useState<Problem>(
    getProblem(category, difficulty)
  );
  const [showDifficulty, setShowDifficulty] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getNextProblem = () => {
    setIsFlipped(false);
    const newProblem = getProblem(category, difficulty);
    setProblem(newProblem);
  };

  const flipCard = () => {
    setIsFlipped(true);
    setTimeout(() => getNextProblem(), 3000);
  };

  const changeCategory = (newCategory: Category) => {
    setCategory(newCategory);
    flipCard();
  };

  const changeDifficulty = (newDifficulty: Difficulty) => {
    setDifficulty(newDifficulty);
    flipCard();
  };

  const toggleShowDifficulty = () => setShowDifficulty((prev) => !prev);

  if (!isClient) return null;

  return (
    <div className="flex flex-col h-[--main-height] items-center p-4">
      <p className="absolute">Difficulty: {difficulty}</p>
      <Card problem={problem} isFlipped={isFlipped} flipCard={flipCard} />
      {showDifficulty ? (
        <DifficultyBtns changeDifficulty={changeDifficulty} />
      ) : (
        <CategoryBtns changeCategory={changeCategory} />
      )}
      <button type="button" onClick={toggleShowDifficulty}>
        <FaGear className="absolute bottom-8 right-3 text-[3rem] text-[--color-bg] hover:scale-110" />
      </button>
    </div>
  );
}
