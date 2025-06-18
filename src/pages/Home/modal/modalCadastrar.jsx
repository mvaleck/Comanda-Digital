import {Modal, BtAddClientes} from "./style"
import close from "../../../assets/close.svg"
import { criarClientes } from "../../../services/clienteService"
import { useState } from "react"
function ModalCadastrar ({ onClose, atualizarClientes }) {
  const [nomeInput, setNomeInput] = useState("");
  const [telefoneInput, setTelefoneInput] = useState("");

  const handleSalvarCliente = async () => {
    const novoCliente = {
      nome: nomeInput,
      telefone: telefoneInput
    };
    await criarClientes(novoCliente);

    setNomeInput("");
    setTelefoneInput("");
    onClose();

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
        onChange={(e) => setNomeInput(e.target.value)}
      />

      <label>Telefone:</label>
      <input
        type="number"
        value={telefoneInput}
        onChange={(e) => setTelefoneInput(e.target.value)}
      />

      <textarea placeholder="Observação"></textarea>
      
      <BtAddClientes onClick={handleSalvarCliente}>Adicionar Cliente</BtAddClientes>
    </Modal>
  );
}


export default ModalCadastrar;