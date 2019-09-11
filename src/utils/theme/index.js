import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import { darken, lighten } from 'polished';

import variables from './variables';

export const theme = {
  fontFamily: `"${variables.font}", sans-serif`,
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  body, #___gatsby, #gatsby-focus-wrapper {
    min-height: 100vh;
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    font-family: ${theme.fontFamily};
    font-size: 17px;
    color: rgba(0, 0, 0, 0.9);
  }
`;

export default GlobalStyle;
