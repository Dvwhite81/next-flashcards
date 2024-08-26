'use client';
import { useEffect, useState } from 'react';

import { getProblem } from '@/utils/helpers';
import { Category, Problem } from '@/utils/types';

import Card from '@/components/flashcards/Card';
import CategoryButtons from '@/components/buttons/CategoryButtons';

export default function FlashCardsPage() {
  const [isClient, setIsClient] = useState(false);
  const [category, setCategory] = useState<Category>(Category.MULTIPLICATION);
  const [problem, setProblem] = useState<Problem>(getProblem(category));
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getNextProblem = () => {
    setIsFlipped(false);
    const newProblem = getProblem(category);
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

  if (!isClient) return null;

  return (
    <div className="flex flex-col h-[--main-height] items-center p-4">
      <Card problem={problem} isFlipped={isFlipped} flipCard={flipCard} />
      <CategoryButtons changeCategory={changeCategory} />
    </div>
  );
}
