import ModalClientes from "./modal/modalClientes";
import { buscarClientes } from "../../services/clienteService";
import ModalCadastrar from "./modal/modalCadastrar";
import { useState, useEffect } from "react";

function Home () {

  const [clientes, setClientes] = useState([]);
  const [openModalCadastro, setOpenModalCadastro] = useState(false)

  const handleOpenModal = () => setOpenModalCadastro(true);
  const handleCloseModal = () => setOpenModalCadastro(false);
  
  const carregarClientes = async () => {
    const lista = await buscarClientes();
    setClientes(lista);
  };

  
  useEffect(() => {
    carregarClientes();
  }, []);
  

  return (
    <div>
    
      <button onClick={handleOpenModal}>Cadastrar cliente</button>
      {openModalCadastro && <ModalCadastrar
        onClose={handleCloseModal}
        atualizarClientes={carregarClientes}
      />}

      <ModalClientes clientes={clientes}/>
    

    </div>
  );
}

export default Home;