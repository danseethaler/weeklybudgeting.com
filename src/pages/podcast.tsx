import React from 'react';
import Layout from '../components/layout/Layout';
import SliceContainer from '../components/layout/SliceContainer';
import {Headline} from '../components/typography';

const Podcast: React.FC = () => {
  return (
    <Layout>
      <SliceContainer>
        <Headline>Podcast</Headline>
      </SliceContainer>
    </Layout>
  );
};

export default Podcast;
