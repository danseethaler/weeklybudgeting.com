import React from 'react';
import {Link, graphql} from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import {rhythm} from '../utils/typography';
import Hero from '../components/Hero';
import SlidingText from '../components/SlidingText';

interface Props {
  location: Location;
}

const LandingPage: React.FC<Props> = ({data, location}) => {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const siteDescription = get(data, 'site.siteMetadata.description');
  const posts = get(data, 'allMarkdownRemark.edges');

  return (
    <Layout location={location} title={siteTitle}>
      <Helmet
        htmlAttributes={{lang: 'en'}}
        meta={[{name: 'description', content: siteDescription}]}
        title={siteTitle}
      />
      <SlidingText text="monthly" />
      <Hero />
      {posts.map(({node}) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}>
              <Link style={{boxShadow: 'none'}} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
          </div>
        );
      })}
      <Bio />
      {posts.map(({node}) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}>
              <Link style={{boxShadow: 'none'}} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
          </div>
        );
      })}
      {posts.map(({node}) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}>
              <Link style={{boxShadow: 'none'}} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
          </div>
        );
      })}
    </Layout>
  );
};

export default LandingPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
