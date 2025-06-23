import {Menu, Main} from "./style"
import img from "../assets/mene.png"
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import profile from "../assets/profile.svg"
import { getNomeEstabelecimento } from "../services/clienteService"
import { useEffect, useState } from "react";


function LayoutPadrao () {
  const [nome, setNome] = useState("");

  useEffect(() => {
    async function carregarNome() {
      const nomeEstab = await getNomeEstabelecimento();
      if (nomeEstab) setNome(nomeEstab);
    }

    carregarNome();
  }, []);

  return (
    <div>
      <section>
        <Menu>
          <h1>{nome}</h1>
          <Link to="/">Sair</Link>
          <Link to="perfil"><img src={profile} alt="" /></Link>
        </Menu>
      </section>            

      <Main> 
        <h1> <img src={img} alt="" />Clientes Consumação</h1>
      </Main>

     

      <main>
        <Outlet />
      </main>    

    </div>
  );
}

export default LayoutPadrao;