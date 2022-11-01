import Document, { Html, Head, Main, NextScript } from 'next/document';

import React from 'react';
import LoadAnalytic from '@/components/common/analytic';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Inter:400,400i,800,800i&display=optional"
            rel="stylesheet"
          />
          <LoadAnalytic />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
