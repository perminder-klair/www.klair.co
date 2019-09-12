// http://www.gilhuybrecht.com/
import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div``;
const Main = styled.div`
  min-height: 80vh;
`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Welcome to GatsbyJs v1" />
    <Container className="flex flex-col min-h-screen">
      <Header />
      <Main className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-6xl font-semibold">Parminder Singh Klair</h2>
          <h3 className="text-3xl p-2">Full Stack Developer</h3>
        </div>
      </Main>
      <Footer />
    </Container>
  </Layout>
);

export default IndexPage;
