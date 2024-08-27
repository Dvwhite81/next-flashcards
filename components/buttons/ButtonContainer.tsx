import { Category, Difficulty } from '@/utils/types';
import Button from './Button';

type Props = {
  children: React.ReactNode;
};

export default function ButtonContainer({ children }: Props) {
  return (
    <div className="flex h-[--footer-height] w-[80%] justify-evenly">
      {children}
    </div>
  );
}
