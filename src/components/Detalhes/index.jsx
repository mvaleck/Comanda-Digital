import { Link, useParams, useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import {Title, Compras, Item, BtsCompra, SaldoDevedor} from "./style.js"
import { detalhesComanda } from "../../services/compraService.js"

function Detalhes () {

  const { id } = useParams();
  const [compras, setCompras] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const location = useLocation();
  const cliente = location.state?.nome || "Cliente";
  
  useEffect(() => {
    async function carregarComanda () {
      const dados = await detalhesComanda(id);
      setCompras(dados);
      setCarregando(false);
      
    }

    carregarComanda();
  }, [id]);

  if (carregando) {
    return <p>carregando Comanda</p>
  }

  return (
    <div>
      <Title>
        <Link to="/home"> Voltar </Link>
        <h1>Comanda de {cliente}</h1>
        <button>Apagar cliente</button>
      </Title>

      <SaldoDevedor>
        <p> saldo devedor: R$ 30,52</p>
      </SaldoDevedor>
            


      {compras.length === 0 ? (<p>Nenhuma compra encontrada.</p>) : (
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
              <p>R$ {Number(compra.produto)}</p>
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