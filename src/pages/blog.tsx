import React from 'react';
import Layout from '../components/layout/Layout';
import SliceContainer from '../components/layout/SliceContainer';
import {Headline} from '../components/typography';

const Blog: React.FC = () => {
  return (
    <Layout>
      <SliceContainer>
        <Headline>Blog</Headline>
      </SliceContainer>
    </Layout>
  );
};

export default Blog;
