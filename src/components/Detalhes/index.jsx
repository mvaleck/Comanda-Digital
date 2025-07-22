import { Link, useParams, useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import {Title, Compras, Item, BtsCompra, SaldoDevedor, MsgDetalhes} from "./style.js"
import { detalhesComanda } from "../../services/compraService.js";
import { deletarCliente } from "../../services/clienteService.js";

function Detalhes () {
 
  const { id } = useParams();
  const [compras, setCompras] = useState([]);
  const [carregando, setCarregando] = useState(true);

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
    try{
      await deletarCliente(clienteId);
      console.log(clienteId);
    } catch (err) {
      console.error("Erro ao deletar cliente", err);
      console.log(clienteId);
    }
  }



  return (
    <div>
      <Title>
        <Link to="/home"> Voltar </Link>
        <h1>Comanda de {clienteNome}</h1>
        <button onClick={() => handleDelete(id)} >Apagar cliente</button>
      </Title>

      <SaldoDevedor>
        <p> saldo devedor: R$ 30,52</p>
      </SaldoDevedor>
            


      {compras.length === 0 ? (<MsgDetalhes>Nenhuma compra encontrada.</MsgDetalhes>) : (
        compras.map((compra)=> (
          <Compras key={compra.id}>
            <Item>
              <h1>Data</h1>
              <p>
                {new Date(compra.criadoEm?.seconds *1000).toLocaleDateString("pt-BR")}
              </p>
            </Item>

            <Item> 
              <h1>Produto: </h1> 
              <p>{compra.produto}</p>  
            </Item>
    
            <Item>
              <h1>Preço</h1>
              <p>R$ {Number(compra.preco)}</p>
            </Item>

            <BtsCompra>
              <button>Pago?</button>
              <button>Apagar</button>
            </BtsCompra>

          </Compras>
        ))
      )}
     

    </div>
  );
};

export default Detalhes;