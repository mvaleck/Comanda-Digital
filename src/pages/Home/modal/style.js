import styled from "styled-components";
import { Link } from "react-router-dom"; 
import { breakpoints } from "../../../style/breakpoints"

export const Modal = styled.div `
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: rgb(161, 65, 36);
    padding: 20px;
    gap: 2px;
    border-radius: 20px;
    position: absolute;
    z-index: 20;
    right: 30px;
    top: 20px;
    color: white;
    box-shadow: 0px 3px 15px rgba(53, 53, 53, 0.21);


    input , textarea {
        margin-bottom: 15px
    }

    img {
        width: 20px;
        position: relative;
        left: 270px;
        margin-bottom: 10px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        right: 10px;
        top: 90px;

        input, select {
        font-size: 16px;
        }}
`;

export const BtAddClientes = styled.button `
    margin-top: 20px;
    background-color: aliceblue;
    width: 45%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 10px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.09);

`;

//modalclientes
export const Modal2 = styled.main `
    box-shadow: 0px 3px 15px rgba(63, 63, 63, 0.12);
    padding: 25px;
    background-color: rgb(255, 255, 255);
    flex: 0 1 calc(33.33% - 50px); /* 3 por linha com gap */
    box-sizing: border-box;
    border-radius: 20px;
    margin-bottom: 10px;
    align-self: flex-start;  // não deixa abrir todos os models e evita eles ficarem em branco

    @media (max-width: ${breakpoints.tablet}) {
    flex: none;
    margin: 0 auto; //centraliza os cards no meio proporcionalmente
    }
`;

export const DisplayModal = styled.div `
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 60px;
    justify-content: space-around;
    color: rgb(31, 33, 56);

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        gap: 30px;
    }

`;

export const Content = styled.section `
    display: flex;
    flex-direction: column;
    gap: 5px;

    h1 {
        font-size: 25px;
        margin-bottom: 2px;
    }

    p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
    }
`;

export const BtsModalClientes = styled.div  `
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 15px;

    button {
        color: white;
        padding: 12px 18px;
        background-color: rgb(161, 65, 36);

    }
`;

export const AddCompra = styled.div `
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    @media (max-width: ${breakpoints.tablet}) {
        input {
            font-size: 16px;
        }
    }
    

`;

export const BtsAddCancel  = styled.div  `
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    gap: 20px;
   
   button {
    color: white;
    background-color: rgb(43, 46, 77);
    padding: 10px;
   }
`;

export const BtLink = styled(Link)`
    text-decoration: none;
    color: rgb(161, 65, 36);
   
`;