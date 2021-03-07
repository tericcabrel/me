import React from 'react';

import Layout from '@/components/layout';
import Intro from '@/components/sections/intro';
import Experience from '@/components/sections/experience';

const IndexPage = () => (
  <Layout title="Eric Cabrel TIOGO">
    <Intro />
    <Experience />
  </Layout>
);

export default IndexPage;
