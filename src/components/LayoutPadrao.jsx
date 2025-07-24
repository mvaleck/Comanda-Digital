import {Menu, Main, BtLinkSair, PerfilLogout } from "./style"

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
          <PerfilLogout>
            <Link to="perfil"><img src={profile} alt="" /></Link>
            <BtLinkSair to="/">Sair</BtLinkSair>
          </PerfilLogout>
          
        </Menu>
      </section>            

      <main>
        <Outlet />
      </main>    

    </div>
  );
}

export default LayoutPadrao;