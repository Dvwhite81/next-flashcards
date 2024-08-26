import { Problem } from '@/utils/types';
import CardAnswer from './CardAnswer';
import CardQuestion from './CardQuestion';

type Props = {
  problem: Problem;
  isFlipped: boolean;
  flipCard: () => void;
};

export default function Card({ problem, isFlipped, flipCard }: Props) {
  return (
    <div className="flex h-[--center-height] w-full items-center">
      <div
        className="flex flex-row h-[80%] w-[80%] bg-[--color-bg] border-8 border-[--color-accent] text-[--color-accent] border-double rounded-xl m-auto cursor-pointer hover:bg-[--color-primary] hover:text-[--color-bg] hover:border-[--color-bg]"
        onClick={flipCard}
      >
        {isFlipped && <CardAnswer problem={problem} />}
        {!isFlipped && <CardQuestion problem={problem} />}
      </div>
    </div>
  );
}
