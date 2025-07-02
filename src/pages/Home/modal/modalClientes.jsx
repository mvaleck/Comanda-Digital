import { useState } from "react";
import {Modal2, DisplayModal, BtsAddCancel,
  BtsModalClientes, Content, BtLink, AddCompra} from "./style"
import { adicionarCompra } from "../../../services/compraService";


function ModalClientes ({clientes}) {

  const [clienteAtivo, setClienteAtivo] = useState(null);
  const [produtoInput, setProdutoInput] = useState("");
  const [precoInput, setPrecoInput] = useState("");
  const [observacaoInput, setObservacaoInput] = useState("");


  const handleOpenAddCompra = (clienteId) => {
    setClienteAtivo(clienteId);
  }
  
  const handleCloseAddCompra = () => {
    setClienteAtivo(null);
    setProdutoInput("");
    setPrecoInput("");
    setObservacaoInput("");
  }
  

  const handleAddCompra = async () => {
    
    const compraComanda = {
      produto: produtoInput,
      preco: precoInput,
      observacao: observacaoInput
    };

    const sucesso = await adicionarCompra(clienteAtivo, compraComanda);

    if (sucesso) {
      handleCloseAddCompra()
    }
  };

  
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
                <BtLink to={`detalhes/${cliente.id}`}
                  state={{nome: cliente.nome}}
                >Exibir detalhes</BtLink>
                <button  onClick={() => handleOpenAddCompra(cliente.id)}>Adicionar Compra</button>
              </BtsModalClientes>
            </Content>

            {clienteAtivo === cliente.id && (
              <AddCompra>
                <h4>Produto</h4>
                <input
                  type="text"
                  value={produtoInput}
                  onChange={(e) => setProdutoInput(e.target.value)}
                />

                <h4>Preço</h4>
                <input
                  type="number"
                  placeholder="R$"
                  value={precoInput}
                  onChange={(e) => setPrecoInput(e.target.value)}
                />

                <h4>Obs:</h4>
                <input
                  type="text"
                  placeholder="observação"
                  value={observacaoInput}
                  onChange={(e) => setObservacaoInput(e.target.value)}
                />

                <BtsAddCancel>
                  <button  onClick={handleAddCompra}>Adicionar</button>
                  <button onClick={handleCloseAddCompra}>Cancelar</button>
                </BtsAddCancel>
              </AddCompra>
            )}
          </Modal2>
        ))}
      </DisplayModal>
    </div>
  );
}

      

export default ModalClientes;