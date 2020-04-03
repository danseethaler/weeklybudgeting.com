import React from 'react';
import Layout from '../components/layout/Layout';
import SliceContainer from '../components/layout/SliceContainer';
import {Headline} from '../components/typography';

const Faqs: React.FC = () => {
  return (
    <Layout>
      <SliceContainer>
        <Headline>FAQs</Headline>
      </SliceContainer>
    </Layout>
  );
};

export default Faqs;
