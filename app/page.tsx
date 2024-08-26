import NavLink from '@/components/NavLink';
import { NAV_ITEMS } from '@/utils/constants';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gray-300">
      <h1 className="text-[--color-bg] text-4xl">Welcome to Munchie Math!</h1>
      <div className="mt-12">
        <h4 className="text-[--color-bg] text-2xl">
          Want to practice with some cards?
        </h4>
        <NavLink item={NAV_ITEMS[1]} centered={true} />
        <h4 className="text-[--color-bg] text-2xl">Or take a quiz?</h4>
        <NavLink item={NAV_ITEMS[2]} centered={true} />
      </div>
    </main>
  );
}
