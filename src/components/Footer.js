import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .fab,
  .fas {
    font-size: 1.4rem;
  }
`;

const Footer = () => (
  <Container className="container self-end">
    <ul className="flex justify-center m-5">
      <li className="mr-6">
        <a className="text-base" href="#">
          <i className="fab fa-twitter" />
        </a>
      </li>
      <li className="mr-6">
        <a className="text-base" href="#">
          <i className="fab fa-instagram" />
        </a>
      </li>
      <li className="mr-6">
        <a className="text-base" href="#">
          <i className="fab fa-linkedin-in" />
        </a>
      </li>
      <li className="mr-6">
        <a className="text-base" href="#">
          <i className="fab fa-github" />
        </a>
      </li>
      <li className="mr-6">
        <a className="text-base" href="#">
          <i className="fas fa-envelope" />
        </a>
      </li>
    </ul>
  </Container>
);

export default Footer;
