import React from 'react';
import { GetStaticProps } from 'next';

import Layout from '@/components/layout';
import Intro from '@/components/sections/intro';
import Stack from '@/components/sections/stack';
import Blog from '@/components/sections/blog';
import Work from '@/components/sections/work';

import { fetchBlogPosts } from '@/utils/blogPosts';
import { BlogPost } from '../types';

type IndexPageProps = {
  posts: BlogPost[];
};

const IndexPage = ({ posts }: IndexPageProps) => (
  <Layout title="Eric Cabrel TIOGO">
    <Intro />
    <Work />
    <Stack />
    {posts && <Blog posts={posts} />}
  </Layout>
);

export default IndexPage;

export const getServerSideProps: GetStaticProps = async () => {
  const posts = await fetchBlogPosts();

  return { props: { posts } };
};
