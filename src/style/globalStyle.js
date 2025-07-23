import { createGlobalStyle } from "styled-components";

// ESTILO GLOBAL DA PÁGINA
const GlobalStyle = createGlobalStyle `


* {
    margin: 0;
    padding: 0;
    
  }

  html, body {
    background-color: rgb(248, 245, 240);
    max-width: 100%;
    overflow-x: hidden; //impede rolagem horizontal em qualquer tipo de tela
  } 

  input, textarea {
  outline: none;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-family: Arial;
  }

  button {
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 20px;
  font-family: Arial;

    &:hover {
    cursor: pointer;
    }

  }

  a {
    font-size: 15px;
    font-family: arial;
  }



`;
export default GlobalStyle;