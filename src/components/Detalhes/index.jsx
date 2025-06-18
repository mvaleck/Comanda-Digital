import { Link } from "react-router-dom";
import {Title, Compras, Item, BtsCompra, SaldoDevedor} from "./style.js"

function Detalhes () {
  return (
    <div>
      <Title>
        <Link to="/home"> Voltar </Link>
        <h1>Comanda de Milena Valeck</h1>
        <button>Apagar cliente</button>
      </Title>

      <SaldoDevedor>
        <p> saldo devedor: R$ 30,52</p>
      </SaldoDevedor>
            

      <Compras>
        <Item>
          <h1>Data</h1>
          <p>24/05/2025</p>
        </Item>

        <Item> 
          <h1>Produto: </h1> <p>Arroz</p>  
        </Item>
    
        <Item>
          <h1>Preço</h1>
          <p>R$ 23,88</p>
        </Item>

        <BtsCompra>
          <button>Pago?</button>
          <button>Apagar</button>
        </BtsCompra>
      </Compras>

    </div>
  );
};

export default Detalhes;