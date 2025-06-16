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
        <button type="button">Entrar</button>
        <Link to="/cadastro">ou Cadastre-se aqui </Link>
      </LoginSection>
    </Container>
  );
};

export default Login;