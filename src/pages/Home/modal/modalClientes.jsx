import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Modal2, DisplayModal, BtsAddCancel,
  BtsModalClientes, Content, AddCompra} from "./style"

import { buscarClientes } from "../../../services/clienteService";

function ModalClientes () {
  const [clientes, setClientes] = useState([]);
  const [addCompra, setAddCompra] = useState(false);

  const handleOpenAddCompra = () => {
    setAddCompra(prev => !prev);
  };
  const handleCloseAddCompra = () => {
    setAddCompra(false)
  }

  const carregarClientes = async () => {
    const lista = await buscarClientes();
    setClientes(lista);
  };

  useEffect(() => {
    carregarClientes();
  }, []);

  
  return (
    <div>
      <DisplayModal>

        {clientes.map ((cliente)=> (
          <Modal2 key={cliente.id}>
            <Content>
              <h1>{cliente.nome}</h1>
              <p>Telefone {cliente.telefone}</p>
              <p>Status: Ativo</p>
              <p>Saldo devedor: R$ 40,85</p>

              <BtsModalClientes>
                <Link to="detalhes" >Exibir detalhes</Link>
                <button onClick={handleOpenAddCompra}>Adicionar Compra</button>
              </BtsModalClientes>
            </Content>

            {addCompra &&  <AddCompra>
              <h4>Produto</h4>
              <input type="text" />
              <h4>Preço</h4>
              <input type="number" placeholder="R$" />
              <h4>Obs:</h4>
              <input type="text" placeholder="observação"/>

              <BtsAddCancel>
                <button>Adicionar</button>
                <button onClick={handleCloseAddCompra}>Cancelar</button>
              </BtsAddCancel>

            </AddCompra>
            }


          </Modal2>
        ))}
       

      </DisplayModal>


      
      
    
    </div>
  );
};

export default ModalClientes;