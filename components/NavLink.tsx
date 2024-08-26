import { NavItem } from '@/utils/types';
import Link from 'next/link';

type Props = {
  item: NavItem;
  bordered?: boolean;
  centered?: boolean;
};

export default function NavLink({
  item,
  bordered = false,
  centered = false,
}: Props) {
  const className =
    'p-4 rounded-xl cursor-pointer bg-[--color-bg] text-[--color-primary] hover:bg-[--color-primary] hover:text-[--color-bg] list-none';
  const borderClass = bordered ? ' border-b border-gray-600 ' : ' m-2 ';
  const centerClass = centered ? 'text-center' : '';

  return (
    <li key={item.id} className={className + borderClass + centerClass}>
      <Link href={item.path}>{item.text}</Link>
    </li>
  );
}
