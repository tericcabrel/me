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
    <header className="header flex fixed top-0 w-full py-4 px-12 justify-between items-center h-auto">
      <div>
        <a href="#" onClick={() => scrollToTop()}>
          <Logo />
        </a>
      </div>
      <div className="menu-button">
        <a href="#" className="nav-icon" onClick={(e) => toggleNav(e, true)}>
          <HamburgerIcon />
        </a>
      </div>
      <nav className={`nav-menu ${isOpen ? 'nav-open' : 'nav-close'}`}>
        <div className="nav-button">
          <a href="#" className="nav-icon" onClick={(e) => toggleNav(e, false)}>
            <CloseIcon />
          </a>
        </div>
        {/* @ts-ignore */}
        <ul ref={wrapperRef}>
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
