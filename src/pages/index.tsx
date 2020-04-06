import {graphql} from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';
import LandingHeader from '../components/LandingHeader';
import Layout from '../components/layout/Layout';
import Podcast from './landing/slices/Podcast';
console.log('Podcast', Podcast);

interface Props {
  location: Location;
}

const LandingPage: React.FC<Props> = ({data, location}) => {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const siteDescription = get(data, 'site.siteMetadata.description');
  const posts = get(data, 'allMarkdownRemark.edges');

  return (
    <Layout location={location}>
      <Helmet
        htmlAttributes={{lang: 'en'}}
        meta={[{name: 'description', content: siteDescription}]}
        title={siteTitle}
      />
      <LandingHeader />
      <Podcast />
      {/*
      {posts.map(({node}) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
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
              }}>
              <Link style={{boxShadow: 'none'}} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
          </div>
        );
      })} */}
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
