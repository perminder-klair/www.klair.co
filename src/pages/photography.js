// https://github.com/iammatthias/.com

import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
`;

const Photography = () => (
  <Layout>
    <Seo title="Profile" />
    <section className="section">
      <Container className="container">
        <h1 className="title">Photography</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </section>
  </Layout>
);

export default Photography;
