import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  a {
    position: relative;
    ::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.8);
      transform-origin: bottom right;
      transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }
    :hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

const Header = () => (
  <Container className="container">
    <ul className="flex justify-center m-5">
      <li className="mr-6">
        <Link className="text-xl font-medium" to="/profile">
          Profile
        </Link>
      </li>
      {/* <li className="mr-6">
        <Link className="text-xl font-medium" to="/projects">
          Projects
        </Link>
      </li> */}
      <li className="mr-6">
        <Link className="text-xl font-medium" to="/blog">
          Blog
        </Link>
      </li>
      <li className="mr-6">
        <Link className="text-xl font-medium" to="/photography">
          Photography
        </Link>
      </li>
      <li className="mr-6">
        <Link className="text-xl font-medium" to="/contact">
          Get in touch
        </Link>
      </li>
    </ul>
  </Container>
);

export default Header;
