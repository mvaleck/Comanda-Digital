import { useParams, useLocation, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import {Title, BtPending, BtLink, BtApagarCompra, Compras, Item, BtsCompra, Obs, ContainerHorizontal, SaldoDevedor, MsgDetalhes} from "./style.js"
import { detalhesComanda, deletarCompra } from "../../services/compraService.js";
import { deletarCliente } from "../../services/clienteService.js";
import { getAuth } from "firebase/auth";

function Detalhes () {
 
  const { id } = useParams();
  const [compras, setCompras] = useState([]);
  const [carregando, setCarregando] = useState(true);
 
  const navigate = useNavigate();
  const location = useLocation();
  const clienteNome = location.state?.nome || "Cliente";

  useEffect(() => {
    async function carregarComanda () {
      const dados = await detalhesComanda(id);
      setCompras(dados);
      setCarregando(false);
    }

    carregarComanda();
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
    } catch (error) {
      alert("Erro ao deletar compra: " + error.message);
    }
  };

  return (
    <div>
      <Title>
        <BtLink to="/home"> Voltar </BtLink>
        <h1>Comanda de {clienteNome}</h1>
        <button onClick={() => handleDelete(id)} >Apagar cliente</button>
      </Title>

      <SaldoDevedor>
        <p> saldo devedor: R$ 30,52</p>
        <button>Limpar Comanda</button>
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
                <p>R$ {Number(compra.preco)}</p>
              </Item>

              <BtsCompra>
                <BtPending>Confirmar pagamento</BtPending>
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