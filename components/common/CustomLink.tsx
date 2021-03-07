import React, { PropsWithChildren } from 'react';
import Link from 'next/link';

const CustomLink = ({ children, path }: PropsWithChildren<{ path: string }>) => {
  return (
    <Link href={path}>
      <a target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
