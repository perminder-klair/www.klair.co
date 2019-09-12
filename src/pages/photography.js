// https://github.com/iammatthias/.com

import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GalleryItem from '../components/GalleryItem';

const Main = styled.div`
  min-height: 80vh;
`;

const Photography = ({ data }) => {
  const { edges: gallery } = data.allMdx;
  console.log('gallery', gallery);

  return (
    <Layout>
      <Seo title="News & Updates" />
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main className="container">
          <div className="py-16 px-64">
            {gallery.map(({ node: item }) => (
              <GalleryItem key={item.id} gallery={item} />
            ))}
          </div>
        </Main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Photography;

export const pageQuery = graphql`
  query galleryIndex {
    allMdx(
      filter: { fields: { type: { eq: "gallery" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
