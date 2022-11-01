import React, { ReactNode } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import Footer from './footer';
import Header from './header';

type Props = {
  children?: ReactNode;
  title?: string;
};

const url = process.env.NEXT_PUBLIC_WEB_URL;
const description = [
  "I'm interested in Backend, DX, Observability, DevOps, and Infrastructure as Code.",
  'I enjoy sharing my knowledge and contributing to open-source projects.',
];

const Layout = ({ children, title = 'Eric Cabrel TIOGO' }: Props) => (
  <div>
    <NextSeo
      canonical={url}
      description={description.join(' ')}
      openGraph={{
        description: description.join(' '),
        images: [
          {
            alt: 'Og Image Alt',
            height: 640,
            url: `${url}/og.png`,
            width: 1200,
          },
        ],
        site_name: 'Eric Cabrel TIOGO',
        title,
        url,
      }}
      title={title}
      twitter={{
        cardType: 'summary_large_image',
        handle: '@tericcabrel',
        site: '@tericcabrel',
      }}
    />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      <meta content="#009efa" name="theme-color" />
      <link href="/favicon.svg" rel="icon" />
    </Head>
    <div id="root">
      <div className="max-w-screen-md md:mx-auto">
        <Header />
        <div className="mt-6 mx-auto px-4">{children}</div>
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;
