import { Category } from '@/utils/types';
import Button from './Button';
import ButtonContainer from './ButtonContainer';

type Props = {
  changeCategory: (category: Category) => void;
};

export default function CategoryBtns({ changeCategory }: Props) {
  return (
    <ButtonContainer>
      <Button
        label="Multiplication"
        onClick={() => changeCategory(Category.MULTIPLICATION)}
      />
      <Button label="Random" onClick={() => changeCategory(Category.ALL)} />
      <Button
        label="Division"
        onClick={() => changeCategory(Category.DIVISION)}
      />
    </ButtonContainer>
  );
}
