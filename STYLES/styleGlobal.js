import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`

  /* CSS RESET */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 125%;
    font-family: century gothic, sans-serif;
  }

  body {
    color: rgb(48, 48, 48);
  }

`


export const lightTheme = {
  BG: {
    col1: "#E4DFD8",
  },
  TEXT: {
    col1: "black",
    mainNav: "#524949",
  }
}

export const darkTheme = {
  BG: {
    col1: "#E4DFD8"
  },
  TEXT: {
    col1: "black",
    mainNav: "#524949",
  }
}