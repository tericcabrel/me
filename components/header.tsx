import React, { useState, MouseEvent, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import { links } from '../data/links';
import Logo from '@/components/icons/logo';
import HamburgerIcon from '@/components/icons/hamburger';
import CloseIcon from '@/components/icons/close';
import useOnClickOutside from '@/utils/hooks/useOnClickOutside';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const toggleNav = (e: MouseEvent<any>, state: boolean) => {
    e.preventDefault();
    setIsOpen(state);
  };

  useOnClickOutside(wrapperRef, () => setIsOpen(false));

  return (
    <header className="w-full flex py-4 justify-between items-center h-auto">
      <div>
        <a href="#" onClick={() => scrollToTop()}>
          <Logo />
        </a>
      </div>
      <div className="menu-button">
        <a className="nav-icon" href="#" onClick={(e) => toggleNav(e, true)}>
          <HamburgerIcon />
        </a>
      </div>
      <nav className={`nav-menu ${isOpen ? 'nav-open' : 'nav-close'}`}>
        <div className="nav-button">
          <a className="nav-icon" href="#" onClick={(e) => toggleNav(e, false)}>
            <CloseIcon />
          </a>
        </div>
        {/* @ts-ignore */}
        <ul ref={wrapperRef}>
          {links.map((link) => (
            <li className="inline-block font-bold px-4" key={link.name}>
              <Link
                activeClass="active"
                className="cursor-pointer"
                duration={700}
                offset={-100}
                smooth={true}
                spy={true}
                to={link.path}
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
