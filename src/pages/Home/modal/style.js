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

//modalclientes
export const Modal2 = styled.main `
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.21);
    padding: 25px;
    background-color: rgb(236, 236, 236);
    flex: 0 1 calc(33.33% - 50px); /* 3 por linha com gap */
    box-sizing: border-box;
    border-radius: 20px;
    margin-bottom: 10px;
  
`;

export const DisplayModal = styled.div  `
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 60px;
    justify-content: space-around;

`;

export const Content = styled.section `
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const BtsModalClientes = styled.div  `
    display: flex;
    gap: 10px;
    margin-top: 15px;

    button {
        padding: 10px;
        background-color: yellow;
    }
`;

export const AddCompra = styled.div `
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const BtsAddCancel  = styled.div  `
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    gap: 20px;
   
   button {
    background-color: rgb(211, 243, 190);
    padding: 10px;
   }
`;
