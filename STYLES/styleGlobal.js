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
    background-color: ${p => p.theme.BG.col1};
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${p => p.theme.TEXT.scrollbar};
  }

`


export const lightTheme = {
  BG: {
    col1: "#E4DFD8",
    col2: "hsl(35, 18.2%, 92.1%)",
  },
  TEXT: {
    col1: "black",
    mainNav: "#524949",
  },
  MARGIN: {
    mar10: "10px",
  },
  MISC: {
    scrollbar: "hsl(34.99999999999998, 18.181818181818198%, 77.05882352941177%)",
  }
}


export const darkTheme = {
  BG: {
    col1: "#E4DFD8",
    col2: "hsl(35, 18.2%, 92.1%)",
  },
  TEXT: {
    col1: "black",
    mainNav: "#524949",
    fadedText: "hsl(0, 5.806451612903232%, 38.3921568627451%)",
  },
  MARGIN: {
    mar10: "10px",
    mar20: "20px",
  },
  MISC: {
    scrollbar: "#E4DFD8",
    separator: "hsl(34.99999999999998, 18.181818181818198%, 77.05882352941177%)",
  },
  TIME: {
    zero2: "0.2s",
  },
  ICON: {
    wheat: "hsl(0, 23.882352941176484%, 79.33333333333333%)",
    earth: "hsl(0, 23.882352941176484%, 66.33333333333333%)",
    cogwheel: "hsl(0, 16.882352941176484%, 77.33333333333333%)",
  }
}