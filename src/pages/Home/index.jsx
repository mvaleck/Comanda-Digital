import {Menu, Main} from "./style"
import img from "../../assets/mene.png" 
import { Link } from "react-router-dom";
import ModalCadastrar from "./modal/modalCadastrar";
import ModalClientes from "./modal/modalClientes"
import { useState } from "react";

function Home () {

  const [openModalCadastro, setOpenModalCadastro] = useState(false)

  const handleOpenModal = () => {
    setOpenModalCadastro(true)
  };
  const handleCloseModal = () => {
    setOpenModalCadastro(false)
  }

  return (
    <div>
      <section>
        <Menu>
          <h1>Olá, Bar do Tonho</h1>
          <Link to="/">Sair</Link>
        </Menu>
      </section>            

      <Main> 
        <h1> <img src={img} alt="" />Clientes Consumação</h1>
        <button onClick={handleOpenModal}>Cadastrar cliente</button>
      </Main>

      {openModalCadastro && <ModalCadastrar
        onClose={handleCloseModal}
      />}

      <ModalClientes/>
  
      
    

    </div>
  );
}

export default Home;