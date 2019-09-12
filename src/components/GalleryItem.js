import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import dayjs from 'dayjs';

const Container = styled.article``;

const GalleryItem = ({ gallery }) => (
  <Container className="mb-12">
    <Link to={`gallery/${gallery.fields.slug}`}>
      <h3 className="text-3xl font-bold mb-3">{gallery.frontmatter.title}</h3>
    </Link>
    <div>
      <span className="text-sm">
        {dayjs(gallery.frontmatter.date).format('MMMM YYYY')}
        {' • '}
        {gallery.frontmatter.category}
      </span>
      <p className="mt-2">{gallery.excerpt}</p>
    </div>
  </Container>
);

export default GalleryItem;
