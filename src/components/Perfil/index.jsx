import { Link } from "react-router-dom";
import profile from "../../assets/profile-user.svg"
import {Page, Profile} from "./style"

function Perfil () {
  return (
    <Page> 
      <Link to="/home"> Voltar</Link> 

      <Profile>
        <h1>Perfil</h1>
        <img src={profile} alt="" />
        <p>Nome:</p>
        <p>Telefone: </p>
        <p>E-mail: </p>
        <button>Editar Perfil</button>
      </Profile>

    </Page>
  )
}

export default Perfil;