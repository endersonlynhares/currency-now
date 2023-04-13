import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 65.5%;
  }

  body{
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
  }

  input, textarea, button{
    font-family: "Roboto", sans-serif;
  }

`