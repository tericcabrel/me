import React from 'react';

import Layout from '@/components/layout';
import Intro from '@/components/sections/intro';
import Experience from '@/components/sections/experience';
import Education from '@/components/sections/education';

const IndexPage = () => (
  <Layout title="Eric Cabrel TIOGO">
    <Intro />
    <Experience />
    <Education />
  </Layout>
);

export default IndexPage;
