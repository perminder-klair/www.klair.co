import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import dayjs from 'dayjs';

const Container = styled.article``;

const NewsItem = ({ post }) => (
  <Container className="mb-12">
    <Link to={`post/${post.fields.slug}`}>
      <h3 className="text-3xl font-bold mb-3">{post.frontmatter.title}</h3>
    </Link>
    <div>
      <span className="text-sm">
        {dayjs(post.frontmatter.date).format('MMMM YYYY')}
        {' • '}
        {post.frontmatter.category}
      </span>
      <p className="mt-2">{post.excerpt}</p>
    </div>
  </Container>
);

export default NewsItem;
