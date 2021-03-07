import React, { ReactNode } from 'react';
import Head from 'next/head';

import Footer from './footer';
import Header from './header';

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
    <Header />
    <div className="container md:container md:mx-auto mt-12">
      <div className="content mx-auto">{children}</div>
    </div>
    <Footer />
  </div>
);

export default Layout;
