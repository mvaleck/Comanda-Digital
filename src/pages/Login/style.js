import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../../style/breakpoints";
// @media (max-width: ${breakpoints.tablet}) {}

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        gap: 20px;
        img {
            width: 200px;
            
            margin-bottom: 10px;
        }
    }

`;

export const LoginSection = styled.section `
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
        margin-top: 20px;
    }

    button {
        margin-top: 10px;
        width: 80px;
        font-size: 15px;
        outline: none;
    }
  
`;

export const LinkCadastre = styled(Link) `
    text-decoration: none;
    color: rgb(128, 47, 27);
    margin-top: 2px;
    outline: none;
`;