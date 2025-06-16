import {Container, LoginSection} from "../Login/style"
import { Link } from "react-router-dom";
import img from "../../assets/cadastro.png"

function Cadastro () {
  return (
    <div>
      <Container>
                    
        <LoginSection>
          <h1>Cadastre-se</h1>
          <input type="text" placeholder="Nome do Estabelecimento"/>
          <input type="email" name="" id=""placeholder="E-mail" />
          <input type="password" name="" id="" placeholder="Senha" />
          <button type="button">Cadastrar</button>
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