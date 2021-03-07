import React from 'react';

import Layout from '@/components/layout';
import Intro from '@/components/sections/intro';
import Experience from '@/components/sections/experience';
import Education from '@/components/sections/education';
import Stack from '@/components/sections/stack';

const IndexPage = () => (
  <Layout title="Eric Cabrel TIOGO">
    <Intro />
    <Experience />
    <Education />
    <Stack />
  </Layout>
);

export default IndexPage;
