import styled from "styled-components";
import { breakpoints } from "../../style/breakpoints";

export const BtCadastrar = styled.button `
    background-color: rgb(43, 46, 77);;
    padding: 10px;
    color: rgb(255, 255, 255);
    position: absolute;
    top: 120px;
    right: 50px;

    @media (max-width: ${breakpoints.mobile}) {
     top: 160px
    }
`;