import { Link } from "react-router-dom";
import profile from "../../assets/profile-user.svg"

function Perfil () {
  return (
    <div> 
      <Link to="/home"> Voltar</Link> 

      <section>
        <h1>Perfil</h1>
        <img src={profile} alt="" />
        <p>Nome:</p>
        <p>Telefone: </p>
        <p>E-mail: </p>
        <button>Editar Perfil</button>
      </section>

    </div>
  )
}

export default Perfil;