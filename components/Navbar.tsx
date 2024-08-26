'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NAV_ITEMS } from '@/utils/constants';
import Icon from '@/assets/images/math-icon.png';
import Logo from '@/assets/images/logo-no-background.png';
import NavLink from './NavLink';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavOpen = () => setNavOpen((prev) => !prev);

  return (
    <div className="bg-[--color-bg] flex justify-between items-center h-[--nav-height] mx-auto px-4 text-white">
      {/* Logo */}
      <Link className="h-[75%] w-auto hover:scale-110" href={'/'}>
        <Image className="h-full w-full" src={Logo} alt="Munchie Math" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.id} item={item} />
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div
        onClick={toggleNavOpen}
        className="block md:hidden hover:cursor-pointer hover:scale-125"
      >
        {navOpen ? (
          <AiOutlineClose size={20} color={'#b7feae'} />
        ) : (
          <AiOutlineMenu size={20} color={'#b7feae'} />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          navOpen
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[--color-bg] ease-in-out duration-500 z-10'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <Image
          className="h-[4rem] w-fit mx-auto mt-[1rem]"
          src={Icon}
          alt="Munchie Math"
        />

        {/* Mobile Navigation Items */}
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.id} item={item} bordered={true} />
        ))}
      </ul>
    </div>
  );
}
