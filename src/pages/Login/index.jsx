import img from "../../assets/date.png"
import {Container, LoginSection } from "./style"
import { Link } from "react-router-dom"; 

function Login () {
    return (
        <Container>
            <section>
                <img src={img} alt="" />
            </section>

            <LoginSection>
                <h1>Login</h1>
                <input type="email" name="" id=""placeholder="E-mail" />
                <input type="password" name="" id="" placeholder="Senha" />
                <p>ou Cadastre-se aqui</p>  
                
            </LoginSection>
        </Container>
    );
};

export default Login;