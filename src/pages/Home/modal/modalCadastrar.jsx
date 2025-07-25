import {Modal, BtAddClientes} from "./style";
import close from "../../../assets/close.svg";
import { criarClientes } from "../../../services/clienteService";
import { useState, useRef, useEffect } from "react";

function ModalCadastrar ({ onClose, atualizarClientes }) {
  const [nomeInput, setNomeInput] = useState("");
  const [telefoneInput, setTelefoneInput] = useState("");
  const nomeInputRef = useRef(null);

  useEffect(() => {
    // 3. Foca no input assim que o modal abrir
    if (nomeInputRef.current) {
      nomeInputRef.current.focus();
    }
  }, []);

  const handleSalvarCliente = async () => {
    const novoCliente = {
      nome: nomeInput,
      telefone: telefoneInput
    };
    
    const sucesso = await criarClientes(novoCliente);

    if (sucesso) {
      setNomeInput("");
      setTelefoneInput("");
      onClose();
    };

    // Atualiza a lista na Home
    if (atualizarClientes) {
      atualizarClientes();
    }
  };

  
  return (
    <Modal>
      <button onClick={onClose}><img src={close} alt=""/></button>
      
      <label>Nome do Cliente:</label>
      <input
        type="text"
        value={nomeInput}
        ref={nomeInputRef}
        onChange={(e) => setNomeInput(e.target.value)}
      />

      <label>Telefone:</label>
      <input
        type="number"
        value={telefoneInput}
        max={11}
        onChange={(e) => setTelefoneInput(e.target.value)}
      />

      
      <BtAddClientes onClick={handleSalvarCliente}>Adicionar Cliente</BtAddClientes>
    </Modal>
  );
}


export default ModalCadastrar;