import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div``;

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <Container className="flex flex-col min-h-screen">
      <Header />
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-two-fifths">
            <h2 className="title is-1 has-text-weight-bold">Contact Us</h2>
            <p>
              We’re as accessible as your good neighbour. Feel free
              <br />
              to give us a shout.
            </p>
            <p>
              <span role="img" aria-label="Round Pushpin">
                📍
              </span>{' '}
              {config.location}
            </p>
            <p className="is-4">
              <span role="img" aria-label="e-mail">
                📧
              </span>{' '}
              <a href={`mailto:${config.email}`}>{config.email}</a>
            </p>
            <p>
              <span role="img" aria-label="telephone">
                ☎️
              </span>{' '}
              <a href={`tel:${config.telephone}`}>{config.telephone}</a>
            </p>
            <p className="control">
              <a href="#">
                <button type="submit" className="button is-secondary is-medium">
                  Get in touch
                </button>
              </a>
            </p>
          </div>
          <div className="column is-two-fifths">
            <img className="image" src="/images/contact.svg" alt="contact us" />
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  </Layout>
);

export default Contact;
