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
const description =
  'I work on automating the supply chain of merchandises across the world. I enjoy sharing my knowledge, help people and contribute to open source projects';

const Layout = ({ children, title = 'Eric Cabrel TIOGO' }: Props) => (
  <div>
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: `${url}/og.png`,
            width: 1280,
            height: 640,
            alt: 'Og Image Alt',
          },
        ],
        site_name: 'Eric Cabrel TIOGO',
      }}
      twitter={{
        handle: '@tericcabrel',
        site: '@tericcabrel',
        cardType: 'summary_large_image',
      }}
    />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#009efa" />
      <link href="https://fonts.googleapis.com/css?family=Inter:400,400i,800,800i" rel="stylesheet" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <div id="root">
      <Header />

      <div className="container md:container md:mx-auto mt-12">
        <div className="content mt-6 mx-auto">{children}</div>
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;
