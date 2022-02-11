import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

  }

  html {
    font-size: 125%;
    font-family: Arial, sans-serif;
  }

`

export const lightTheme = {
  BG: {
    col1: "white"
  }
}

export const darkTheme = {
  BG: {
    col1: "black"
  }
}