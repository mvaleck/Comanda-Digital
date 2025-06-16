import {Container, LoginSection} from "../Login/style"
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/cadastro.png"
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Cadastro () {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleCadastar = () => {
    if (!nome || !email || !senha) {
      alert("Preencha todos os campos!"); 
      return;
    } 
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Uauário Cadastrado.', user);
        alert (`Bem vindo(a), ${nome}.. Cadastro realizado com sucesso`);
        navigate("/");
      })
      .catch((error) => {
        console.error('Erro no cadastro', error);
        alert("Erro ao cadastrar: " + error.message);
      });
  };





  return (
    <div>
      <Container>
                    
        <LoginSection>
          <h1>Cadastre-se</h1>
          <input type="text"
            value={nome}
            onChange={(e)=> setNome(e.target.value)}
            placeholder="Nome do Estabelecimento"/>

          <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="" id=""placeholder="E-mail" />
         
          <input type="password" 
            value={senha}
            onChange={(e)=> setSenha(e.target.value)}
            name="" id="" placeholder="Senha" />
         
          <button type="button" onClick={handleCadastar}>Cadastrar</button>
          <Link to="/">Já tem Cadastro? Faça seu Login aqui</Link>
        </LoginSection>
        <section>
          <img src={img} alt="" />   
        </section>
            

      </Container>
    </div>
  );
};

export default Cadastro;