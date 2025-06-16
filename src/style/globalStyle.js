import { createGlobalStyle } from "styled-components";

// ESTILO GLOBAL DA PÁGINA
const GlobalStyle = createGlobalStyle `


* {
    margin: 0;
    padding: 0;
    
  }

  html, body {
    background-color:rgb(250, 250, 250);
    max-width: 100%;
    overflow-x: hidden; //impede rolagem horizontal em qualquer tipo de tela
  } 

  input {
  outline: none;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  }

  button {
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  }



`;
export default GlobalStyle;