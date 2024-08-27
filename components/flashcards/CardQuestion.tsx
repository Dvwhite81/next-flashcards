import { FaDivide, FaTimes } from 'react-icons/fa';
import { Category, Problem } from '@/utils/types';

type Props = {
  problem: Problem;
};

export default function CardQuestion({ problem }: Props) {
  const { firstNum, category, secondNum } = problem.question;
  const icon =
    category === Category.MULTIPLICATION ? <FaTimes /> : <FaDivide />;

  return (
    <div className="relative h-full w-full">
      <span className="absolute w-fit text-9xl left-2">{firstNum}</span>
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl">
        {icon}
      </span>
      <span className="absolute bottom-0 right-2 w-fit text-9xl">
        {secondNum}
      </span>
    </div>
  );
}
