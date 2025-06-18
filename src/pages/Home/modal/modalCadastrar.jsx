import {Modal, BtAddClientes} from "./style"
import close from "../../../assets/close.svg"
import { criarClientes } from "../../../services/clienteService"
import { useState } from "react"


function ModalCadastrar ({onClose}) {

  const [nomeInput, setNomeInput] = useState("");
  const [telefoneInput, setTelefoneInput] = useState("");

  const handleSalvarCliente = () => {
    const novoCliente = {
      nome: nomeInput,
      telefone: telefoneInput
    }
    criarClientes(novoCliente);
    setNomeInput("");
    setTelefoneInput("");
    onClose();
  }

  return (
    <div>


      <Modal>
        <button onClick={onClose}><img src={close} alt=""/></button>
       
        <label htmlFor=""> Nome do Cliente: </label>
        <input type="text" 
          value={nomeInput}
          onChange={(e)=> setNomeInput(e.target.value)}
        />

        <label htmlFor=""> Telefone: </label>  
        <input type="number"
          value={telefoneInput}
          onChange={(e)=> setTelefoneInput(e.target.value)}
        />
    
        <textarea name="" id="" placeholder="Observação"></textarea>
      
        <BtAddClientes onClick={handleSalvarCliente}>Adicionar Cliente</BtAddClientes>
    
      </Modal>

    </div>
  );
};

export default ModalCadastrar;