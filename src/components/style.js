import styled from "styled-components";

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
`;
