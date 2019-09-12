// https://github.com/gaearon/overreacted.io
import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsItem from '../components/NewsItem';

const Main = styled.div`
  min-height: 80vh;
`;

const NewsUpdates = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <Seo title="News & Updates" />
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main className="container">
          <div className="py-16 px-64">
            {posts.map(({ node: post }) => (
              <NewsItem key={post.id} post={post} />
            ))}
          </div>
        </Main>
        <Footer />
      </div>
    </Layout>
  );
};

export default NewsUpdates;

export const pageQuery = graphql`
  query newsIndex {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
