import { useState } from "react";
import img from "../../assets/date.png"
import {Container, LoginSection, LinkCadastre } from "./style"
import { useNavigate} from "react-router-dom"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login () {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !senha) {
      alert("Preencha todos os campos para contiuar..")
      return;
    }
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuário logado: ", user);
        // alert("Login realizado com sucesso");
        navigate('/home');
      })
      .catch((error) => {
        console.error("Erro ao logar: ", error);
        alert("Erro ao fazer login: " + error.message);
      });
  };

  return (
    <Container>
      <section>
        <img src={img} alt="" />
      </section>

      <LoginSection>
        <h1>Login</h1>
        
        <input type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="" id=""placeholder="E-mail" />
        
        <input type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha" />
        
        <button type="button" onClick={handleLogin}>Entrar</button>
        <LinkCadastre to="/cadastro">ou Cadastre-se aqui </LinkCadastre>
      </LoginSection>
    </Container>
  );
};

export default Login;