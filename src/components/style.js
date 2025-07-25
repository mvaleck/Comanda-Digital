import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../style/breakpoints";

// @media (max-width: ${breakpoints.tablet}) {}

export const Menu = styled.div `
    background-color: rgb(43, 46, 77);
    display: flex;
    justify-content: space-around;
    padding: 20px ;
    align-items: center;
    color: rgb(248, 245, 240);
    
    img {
        width: 20px;
    }
   
    @media (max-width: ${breakpoints.tablet}) {
        box-sizing: border-box;
        width: 100%;
    }
`;

export const Main = styled.div `
display: flex;
justify-content: space-between;
padding: 10px 50px;
gap: 50px;
align-items: center;
text-align: center;
    img {
        width: 90px;
    }
    h1 {
        align-items: center;
        text-align: center;
        display: flex;
        gap: 25px;
        color: rgb(31, 33, 56);
       
    }
    button {
        background-color: aqua;
        padding: 10px;
        border-radius: 20px;
        margin-right: 50px;
    }

    @media (max-width: ${breakpoints.tablet}) {
       padding: 0;
       flex-direction: column;
       margin-bottom: 15px;
        h1 {
            gap: 8px;
            font-size: 23px;
        }

        img {
            width: 75px;
            margin-right: 10px;
        }
    }
    
`;

export const BtLinkSair = styled(Link) `
    color: white;
    text-decoration: none;
    background-color: rgba(78, 81, 128, 0.57);
    padding: 10px 15px;
    border-radius: 12px;
    transition: all 0.3s ease; /* suaviza transform e outras mudanças */
    
    &:hover {
    background-color:rgb(255, 251, 236);
    color: rgb(28, 31, 56);
  }

`;

export const PerfilLogout = styled.div `
    display: flex;
    align-items: center;
    gap: 50px;
`;