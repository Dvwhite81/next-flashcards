import { Difficulty } from '@/utils/types';
import Button from './Button';
import ButtonContainer from './ButtonContainer';

type Props = {
  changeDifficulty: (difficulty: Difficulty) => void;
};

export default function DifficultyBtns({ changeDifficulty }: Props) {
  return (
    <ButtonContainer>
      <Button label="Easy" onClick={() => changeDifficulty(Difficulty.EASY)} />
      <Button
        label="Medium"
        onClick={() => changeDifficulty(Difficulty.MEDIUM)}
      />
      <Button label="Hard" onClick={() => changeDifficulty(Difficulty.HARD)} />
    </ButtonContainer>
  );
}
