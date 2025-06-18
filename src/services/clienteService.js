import {auth, db} from "../firebase"
import {collection, addDoc, getDocs} from "firebase/firestore"

//criar clientes
export async function criarClientes(clienteData) {
  const user = auth.currentUser;

  if (!user) {
    alert("Usuário não encontrado");
    return;
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