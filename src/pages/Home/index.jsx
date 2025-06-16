import {Menu, Main} from "./style"
import img from "../../assets/mene.png" 

function Home () {
  return (
    <div>
      <section>
        <Menu>
          <h1>Olá, Bar do Tonho</h1>
          <button>Sair</button>
        </Menu>
      </section>            

      <Main> 
        <h1> <img src={img} alt="" />Clientes Consumação</h1>
        <button>Cadastrar cliente</button>
      </Main>
      
    

    </div>
  );
}

export default Home;