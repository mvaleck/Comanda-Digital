import {Modal, BtAddClientes} from "./style"
import close from "../../../assets/close.svg"
function ModalCadastrar ({onClose}) {
  return (
    <div>


      <Modal>
        <button onClick={onClose}><img src={close} alt=""/></button>
        <label htmlFor=""> Nome do Cliente</label>
        <input type="text" />

        <label htmlFor=""> telefone
        </label>  <input type="number" />
    
        <textarea name="" id="" placeholder="Observação"></textarea>
      
        <BtAddClientes>Adicionar Cliente</BtAddClientes>
    
      </Modal>

    </div>
  );
};

export default ModalCadastrar;