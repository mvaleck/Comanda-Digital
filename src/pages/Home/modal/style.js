import styled from "styled-components";

export const Modal = styled.div `
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: rgb(248, 107, 64);
    padding: 20px;
    gap: 2px;
    border-radius: 20px;
    position: absolute;
    z-index: 20;
    right: 30px;
    top: 20px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.21);


    input , textarea {
        margin-bottom: 15px
    }

    img {
        width: 20px;
        position: relative;
        left: 270px;
        margin-bottom: 10px;
    }

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