import { useState, useRef, useEffect } from "react";
import {Modal2, DisplayModal, BtsAddCancel,
  BtsModalClientes, Content, BtLink, AddCompra} from "./style"
import { adicionarCompra, calcularSaldoDevedor } from "../../../services/compraService";


function ModalClientes ({clientes}) {

  const [clienteAtivo, setClienteAtivo] = useState(null);
  const [produtoInput, setProdutoInput] = useState("");
  const [precoInput, setPrecoInput] = useState("");
  const [observacaoInput, setObservacaoInput] = useState("");
  const produtoInputRef = useRef(null);
  const [saldosDevedor, setSaldosDevedores] = useState(0);

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
 
    const novoSaldo = await calcularSaldoDevedor(clienteAtivo);
    setSaldosDevedores((prev) => ({
      ...prev,
      [clienteAtivo]: novoSaldo
    }));

    if (sucesso) {
      handleCloseAddCompra()
    }
  };

 

  useEffect(() => {
    if (clienteAtivo && produtoInputRef.current) {
      produtoInputRef.current.focus();
    }
  }, [clienteAtivo])

  // Função para formatar os centavos como reais
  function formatarPreco(valor) {
    const numero = Number(valor) / 100;
    return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  // Função para tratar o input
  function handlePrecoChange(e) {
    const raw = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
    setPrecoInput(raw);
  }

  //função para mostrar saldo devedor
  useEffect(() => {
    async function carregarTodosSaldos() {
      const novosSaldos = {};
  
      for (const cliente of clientes) {
        const saldo = await calcularSaldoDevedor(cliente.id);
        novosSaldos[cliente.id] = saldo;
      }
  
      setSaldosDevedores(novosSaldos);
    }
  
    if (clientes.length > 0) {
      carregarTodosSaldos();
    }
  }, [clientes]);
  
  
  return (
    <div>
      <DisplayModal>

        {clientes.map ((cliente)=> (
          <Modal2 key={cliente.id}>
            <Content>
              <h1>{cliente.nome}</h1>
              <p>Telefone: {cliente.telefone}</p>
              <p>Status: Ativo</p>
              <p>Saldo devedor:  R$ {saldosDevedor[cliente.id]?.toFixed(2).replace('.', ',') || ""}</p>

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
                  ref={produtoInputRef}
                />

                <h4>Preço</h4>
                <input
                  type="text"
                  placeholder="R$ 00,00"
                  value={precoInput ? formatarPreco(precoInput) : ""}
                  onChange={handlePrecoChange}
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