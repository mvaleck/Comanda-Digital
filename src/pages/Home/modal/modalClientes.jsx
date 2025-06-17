import {Modal2, DisplayModal, BtsAddCancel,
  BtsModalClientes, Content, AddCompra} from "./style"

function ModalClientes () {

  
  return (
    <div>
      <DisplayModal>
        <Modal2>
          <Content>
            <h1>Milena Valeck</h1>
            <p>Telefone 11 5252-5222</p>
            <p>Status: Ativo</p>
            <p>Saldo devedor: R$ 40,85</p>

            <BtsModalClientes>
              <button>Exibir detalhes</button>
              <button>Adicionar Compra</button>
            </BtsModalClientes>
          </Content>

          <AddCompra>
            <h4>Produto</h4>
            <input type="text" />
            <h4>Preço</h4>
            <input type="number" placeholder="R$" />
            <h4>Obs:</h4>
            <input type="text" placeholder="observação"/>

            <BtsAddCancel>
              <button>Adicionar</button>
              <button>Cancelar</button>
            </BtsAddCancel>

          </AddCompra>

        </Modal2>

      </DisplayModal>
      
      
    
    </div>
  );
};

export default ModalClientes;