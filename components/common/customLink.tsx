import React, { PropsWithChildren } from 'react';
import Link from 'next/link';

const CustomLink = ({ children, path }: PropsWithChildren<{ path: string }>) => {
  return (
    <Link href={path}>
      <a rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
