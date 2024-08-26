import { Category } from '@/utils/types';
import CategoryBtn from './CategoryBtn';

type Props = {
  changeCategory: (category: Category) => void;
};

export default function CategoryButtons({ changeCategory }: Props) {
  return (
    <div className="flex h-[--footer-height] w-[80%] justify-evenly">
      <CategoryBtn
        label="Multiplication"
        onClick={() => changeCategory(Category.MULTIPLICATION)}
      />
      <CategoryBtn
        label="Random"
        onClick={() => changeCategory(Category.ALL)}
      />
      <CategoryBtn
        label="Division"
        onClick={() => changeCategory(Category.DIVISION)}
      />
    </div>
  );
}
