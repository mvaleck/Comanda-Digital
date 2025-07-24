import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../../style/breakpoints";
// @media (max-width: ${breakpoints.mobile}) { }
export const Title = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
    margin-top: 65px;
    color: rgb(43, 46, 77);

    button {
        background-color: rgb(161, 65, 36);
        color: white;
        padding: 10px 15px;
        border-radius: 12px;
        font-size: 15px;
    }

    @media (max-width: ${breakpoints.mobile}) { 
      padding: 0px 10px 0px;
      gap: 12px;
        h1 {
              font-size: 25px;
              align-items: center;
              text-align: center;
        }

        button {
            font-size: 12px;
        }
    }
    
`;


export const Compras = styled.div `
display:flex;
flex-direction: column;
justify-content: space-between;
border-bottom: 1px solid #ccc;
width: 70%;
margin: 0 auto;
padding-bottom: 12px;
margin-bottom: 22px;
color:rgb(29, 31, 53);

h1 {
    font-size: 15px;
    margin-bottom: 5px;
}

`;

export const Item = styled.div `
    display: flex;
    flex-direction: column;
    
    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: row;
        gap: 10px;
     }
`;

export const BtsCompra = styled.div `
    display: flex;
    gap: 30px;
    
    @media (max-width: ${breakpoints.mobile}) {
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
     }
    
`;
export const SaldoDevedor = styled.div `
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 25px;
`;

export const MsgDetalhes = styled.p `
    margin-top: 20px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    color: rgb(43, 46, 77);
`;
export const BtLink = styled(Link)`
    text-decoration: none;
    background-color: rgb(43, 46, 77);
    color: white;
    padding: 10px 15px;
    border-radius: 12px;
    font-size: 15px;
   
`;

export const ContainerHorizontal = styled.div `
display: flex;
justify-content: space-between;
@media (max-width: ${breakpoints.mobile}) {
    display: block;
 }
`;

export const Obs = styled.div `
    margin-top: 10px;
    display: flex;
    gap: 5px;
    
    span {
        font-weight: bold;
        color: rgb(161, 65, 36);
    }
`;

export const BtPending = styled.button `
    background-color: rgba(151, 151, 151, 0.57);
    box-shadow: 0px 3px 3px rgba(2, 17, 29, 0.3);
    color: white;
    padding: 5px 12px;
`;

export const BtApagarCompra = styled.button `
    color: rgb(161, 65, 36);

`;

/*



export const BtApagarCompra = styled.button ``;
export const Tabela = styled.div ``;

*/