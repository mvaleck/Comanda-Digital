import {Modal2, DisplayModal, Content, BtDetails} from "./style"

function ModalClientes () {
  return (
    <DisplayModal>
      <Modal2>
        <Content>
          <h1>Milena Valeck</h1>
          <p>Telefone 11 5252-5222</p>
          <p>Status: Ativo</p>
          <p>Saldo devedor: R$ 40,85</p>
          <BtDetails>Exibir detalhes</BtDetails>
        </Content>
      </Modal2>

    </DisplayModal>
  );
};

export default ModalClientes;