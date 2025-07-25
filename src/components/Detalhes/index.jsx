import { useParams, useLocation, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import confirm from "../../assets/confirm.svg"
import {Title, BtPending, BtLink, BtApagarCompra, Compras, Item, BtsCompra, Obs, ContainerHorizontal, SaldoDevedor, MsgDetalhes} from "./style.js"
import { detalhesComanda, deletarCompra, confirmarPagamento, calcularSaldoDevedor, limparComanda } from "../../services/compraService.js";
import { deletarCliente } from "../../services/clienteService.js";
import { getAuth } from "firebase/auth";
import back from "../../assets/back.svg";

function Detalhes () {
 
  const { id } = useParams();
  const [compras, setCompras] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [saldoDevedor, setSaldoDevedor] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const clienteNome = location.state?.nome || "Cliente";

  useEffect(() => {
    async function carregarComandaECalcularSaldo() {
      try {
        const dados = await detalhesComanda(id);
        setCompras(dados);
  
        const saldo = await calcularSaldoDevedor(id);
        setSaldoDevedor(saldo);
      } catch (error) {
        console.error("Erro ao carregar comanda ou saldo devedor:", error);
      } finally {
        setCarregando(false);
      }
    }
  
    carregarComandaECalcularSaldo();
  }, [id]);

  if (carregando) {
    return <MsgDetalhes>carregando Comanda</MsgDetalhes>
  }

  const handleDelete = async (clienteId) => {
    const confirmar = window.confirm("Tem certeza que deseja apagar esse cliente?");
    if (!confirmar) return;

    try{
      await deletarCliente(clienteId);
      navigate("/home")
      console.log("Cliente deletado: ", clienteId);
    } catch (err) {
      console.error("Erro ao deletar cliente", err);
      console.log(clienteId);
    }
  }

  const handleDeleteCompra = async (compraId) => {
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (!user) {
      alert("Usuário não autenticado");
      return;
    }

    const confirmar = window.confirm("Tem certeza que deseja apagar essa compra?");
    if (!confirmar) return;

    try {
      await deletarCompra(user.uid, id, compraId);
      // Remover do estado local após deletar com sucesso
      setCompras((prev) => prev.filter((compra) => compra.id !== compraId));
      const novoSaldo = await calcularSaldoDevedor(id);
      setSaldoDevedor(novoSaldo);
    } catch (error) {
      alert("Erro ao deletar compra: " + error.message);
    }
  };

  //confirmar pagamento e atualizar lista após
  async function handleConfirmarPagamento(clienteId, compraId) {
    await confirmarPagamento(clienteId, compraId);
    const novasCompras = await detalhesComanda(clienteId);
    setCompras(novasCompras);

    const saldoAtualizado = await calcularSaldoDevedor(clienteId);
    setSaldoDevedor(saldoAtualizado);
  }

  ///limpar comanda
  async function handleLimparComanda(clienteId) {
    const confirmar = window.confirm("Tem certeza que deseja limpar a comanda desse cliente? Essa ação apagará todas as compras pagas e/ou pendentes.")
    if (!confirmar) return;
    try {
      await limparComanda(clienteId);
      setCompras([]);
      setSaldoDevedor(0);
      console.log("Comanda limpa com sucesso!")
    }  catch (error) {
      alert("Erro ao limpar comanda: " + error.message);
    }
  }

  return (
    <div>
      <Title>
        <BtLink to="/home"> <img src={back} alt="" /> </BtLink>
        <h1>Comanda de {clienteNome}</h1>
        <button onClick={() => handleDelete(id)} >Apagar cliente</button>
      </Title>

      <SaldoDevedor>
        <p>Saldo devedor: R$ {saldoDevedor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
        <button onClick={() => handleLimparComanda(id)}>Limpar Comanda</button>
      </SaldoDevedor>
            
      {compras.length === 0 ? (<MsgDetalhes>Nenhuma compra encontrada.</MsgDetalhes>) : (
        compras.map((compra)=> (
          <Compras key={compra.id}>

            <ContainerHorizontal>
              <Item>
                <h1>Data:</h1>
                <p>
                  {new Date(compra.criadoEm?.seconds *1000).toLocaleDateString("pt-BR")}
                </p>
              </Item>

              <Item> 
                <h1>Produto: </h1> 
                <p>{compra.produto}</p>  
              </Item>
    
              <Item>
                <h1>Preço:</h1>
                <p>R$ {Number(compra.preco).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
              </Item>

              <BtsCompra>
                {compra.statusPagamento === "pago" ? (
                  <span>
                    <img src={confirm} alt="" />
                    Pago
                  </span>
                ) : (
                  <BtPending onClick={() => handleConfirmarPagamento(id, compra.id)}>
                  Confirmar pagamento
                  </BtPending>
                )}
                <BtApagarCompra onClick={() => handleDeleteCompra (compra.id)}>Apagar</BtApagarCompra>
              </BtsCompra>
            </ContainerHorizontal>
           
            <Obs>
              <p> <span>Observação: </span> {compra.observacao}</p>
            </Obs>
          </Compras>
         
        )))}
     

    </div>
  );
};

export default Detalhes;