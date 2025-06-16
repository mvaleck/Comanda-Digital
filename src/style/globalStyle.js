import { createGlobalStyle } from "styled-components";

// ESTILO GLOBAL DA PÁGINA
const GlobalStyle = createGlobalStyle `


* {
    margin: 0;
    padding: 0;
    
  }

  html, body {
    background-color:rgb(250, 250, 250);
    font-family: 'Arial', sans-serif;
    max-width: 100%;
    overflow-x: hidden; //impede rolagem horizontal em qualquer tipo de tela
  } 




`;
 export default GlobalStyle;