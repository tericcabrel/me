import React from 'react';
import Link from 'next/link';

import { links } from '../data/links';
import Logo from '@/components/icons/logo';

const Header = () => {
  return (
    <header className="header flex fixed top-0 w-full py-4 px-12 justify-between items-center h-auto">
      <div>
        <a href="/">
          <Logo />
        </a>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.name} className="inline-block font-bold px-4">
              <Link href={link.path}>
                <a className="text-white">{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
