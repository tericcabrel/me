import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Footer from './footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Eric Cabrel TIOGO' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Inter:400,400i,800,800i" rel="stylesheet" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
      </nav>
    </header>
    {children}
    <Footer />
  </div>
);

export default Layout;
