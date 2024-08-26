import { Problem } from '@/utils/types';

type Props = {
  problem: Problem;
};

export default function CardAnswer({ problem }: Props) {
  return (
    <div className="h-full w-full flex items-center justify-center bg-[--color-accent] text-[--color-bg]">
      <span className="text-9xl h-fit w-fit">{problem.answer}</span>
    </div>
  );
}
