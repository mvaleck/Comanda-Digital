import ModalClientes from "./modal/modalClientes";
import { buscarClientes } from "../../services/clienteService";
import ModalCadastrar from "./modal/modalCadastrar";
import { useState, useEffect } from "react";
import {BtCadastrar} from "./style.js"
import { Title } from "../../components/Detalhes/style.js";
import ClientesConsumacao from "../../components/ClientesConsumacao.jsx"
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
    
      <BtCadastrar onClick={handleOpenModal}>Cadastrar cliente</BtCadastrar>
      {openModalCadastro && <ModalCadastrar
        onClose={handleCloseModal}
        atualizarClientes={carregarClientes}
      />}
      
      <ClientesConsumacao/>
      <ModalClientes clientes={clientes}/>
    

    </div>
  );
}

export default Home;