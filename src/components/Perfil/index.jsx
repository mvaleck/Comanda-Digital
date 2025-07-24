import { Link } from "react-router-dom";
import profile from "../../assets/profile-user.svg";
import { Page, Profile } from "./style";
import { getNomeEstabelecimento } from "../../services/clienteService";
import { useEffect, useState } from "react";

function Perfil() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    async function carregarNome() {
      const nomeEstab = await getNomeEstabelecimento();
      if (nomeEstab) setNome(nomeEstab);
    }

    carregarNome();
  }, []);

  return (
    <Page>
      <Link to="/home">Voltar</Link>

      <Profile>
        <h1>Perfil</h1>
        <img src={profile} alt="Foto de perfil" />
        {nome ? (
          <p>Nome: {nome}</p>
        ) : (
          <p>Carregando nome...</p>
        )}
        <p>Telefone: </p>
        <p>E-mail: </p>
        <button>Editar Perfil</button>
      </Profile>
    </Page>
  );
}

export default Perfil;
