import React from 'react';
import Layout from '../components/layout/Layout';
import SliceContainer from '../components/layout/SliceContainer';
import {Headline} from '../components/typography';

const Pricing: React.FC = () => {
  return (
    <Layout>
      <SliceContainer>
        <Headline>Pricing</Headline>
      </SliceContainer>
    </Layout>
  );
};

export default Pricing;
