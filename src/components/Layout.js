import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import GlobalStyle, { theme } from '../utils/theme';
import config from '../utils/config';
import './layout.css';

const IndexLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <title>{config.siteName}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta description={config.description} />
      </Helmet>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

export default IndexLayout;
