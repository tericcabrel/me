import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import { links } from '../data/links';
import Logo from '@/components/icons/logo';

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className="header flex fixed top-0 w-full py-4 px-12 justify-between items-center h-auto">
      <div>
        <a href="#" onClick={() => scrollToTop()}>
          <Logo />
        </a>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.name} className="inline-block font-bold px-4">
              <Link
                className="cursor-pointer"
                activeClass="active"
                to={link.path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={700}
              >
                <span className="text-white">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
