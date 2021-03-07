import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { links } from '../data/links';

const Header = () => {
  return (
    <header className="header flex fixed top-0 w-full py-4 px-12 justify-between items-center h-auto">
      <div>
        <a href="/">
          <Image src="/logo.png" alt="Teco logo" width={50} height={50} />
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
