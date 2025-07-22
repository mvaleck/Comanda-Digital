import { getAuth } from "firebase/auth";
import {auth, db} from "../firebase"
import {collection, addDoc, getDocs} from "firebase/firestore"
import { doc, getDoc, deleteDoc} from "firebase/firestore";

//criar clientes
export async function criarClientes(clienteData) {
  const user = auth.currentUser;

  if (!user) {
    alert("Usuário não encontrado");
    return;
  }

  const nomeValido = clienteData.nome && clienteData.nome.trim() !== "";
  const telefoneValido = clienteData.telefone && clienteData.telefone.trim() !== "";

  if (!nomeValido || !telefoneValido) {
    alert("Preencha todos os campos obrigatórios: nome e telefone.");
    return false;
    //não fecha modal quando os dados não sao válidos
  }
  
  const userId = user.uid;

  try {
    await addDoc(collection(db, "users", userId, "clientes"), {
      nome: clienteData.nome,
      telefone: clienteData.telefone,
      criadoEm: new Date()
    });


    console.log("Cliente cadastrado no estabelecimento")
    alert("Cliente cadastrado com sucesso!");
    return true;
    //fecha modal

  } catch (error) {
    console.error("Erro ao cadastrar Cliente: ", error)
    alert("Erro ao cadastrar cliente");
        
  }
}

//buscar clientes
export async function buscarClientes( ) {
  const user = auth.currentUser;

  if (!user) {
    alert ("Usuário não autenticado");
    return [];
  }
    
  const userId = user.uid;
  const clientesRef = collection(db, "users", userId, "clientes");

  try {
    const querySnapshot = await getDocs(clientesRef);
    const lista = querySnapshot.docs.map((doc)=> ({
      id: doc.id,
      ...doc.data()
    }));
    return lista;

  } catch (error) {
    console.error("Erro ao buscar clientes: ", error)
    return[];
  }

}

//nome do estabelecimento
export async function getNomeEstabelecimento() {
  const user = auth.currentUser;

  if (!user) {
    alert("Usuário não encontrado");
    console.log("Erro ao buscar nome do estabelecimento no GET");
  }

  const userId = user.uid;
  console.log("UID do usuário logado:", userId);

  try {
    const docRef = doc(db, "usuarios", userId); //acessa a coleção
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const dados = docSnap.data();
      return dados.nome || null; //retorna o nome
    } else {
      console.warn("Documento do usuário não encontrado")
      return null;
    } 


  } catch (error){
    console.error ("Erro", error)
    return null;
  }

}

export async function deletarCliente (clienteId) {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (!user){
      alert('Usuário não autenticado')
      return;
    }

    const clientesRef = doc(db, "users", user.uid, "clientes", clienteId);
    await deleteDoc(clientesRef);
    console.log("Cliente deletado com sucesso: ", clienteId);
  } catch (error) {
    console.error("Erro ao deletar cliente", error);
    alert("Erro ao deletar cliente");
  }
  
}