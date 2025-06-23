import { getDocs } from "firebase/firestore"; 
import {auth, db } from "../firebase"
import { collection, addDoc } from "firebase/firestore";

export async function adicionarCompra (clienteId, compraData) {
  const user = auth.currentUser;

  if (!user) {
    alert ("Usuário não encontrado");
    return;
  }

  const userId = user.uid;

  if (!clienteId) {
    alert('Cliente não informado');
    return;
  }

  const produtoValido = compraData.produto && compraData.produto.trim() !== "";
  const precoValido = compraData.preco && !isNaN(compraData.preco);

  if (!produtoValido || !precoValido) {
    alert ("Preencha todos os campos para continuar")
    return false;
  }

  try {
    await addDoc(collection(db, "users", userId, "clientes", clienteId, "compras"), 
      {
        produto: compraData.produto,
        preco: parseFloat(compraData.preco),
        observacao: compraData.observacao || "",
        criadoEm: new Date(),
      });
    console.log ("compra adicionada ao usuário ", userId);
    alert ("Compra adicionada");
    return true;
    
  } catch (error) {
    console.error("Erro ao adicionar compra: ", error);
    alert("Erro ao adicionar compra");
    return false;
  }

};

//GET compras do cliente na pagina de exibir detalhes
export async function detalhesComanda (clienteId) {
  const user = auth.currentUser;

  if (!user) {
    alert("Usuário não encontrado");
    return ([]);
  }

  if (!clienteId) {
    alert ("Cliente não infromado");
    return([]);
  }

  const userId = user.uid;
  const comprasRef = collection(db, "users", userId, "clientes", clienteId, "compras");

  try {
    const querySnapshot = await getDocs(comprasRef);
    const listaCompras = querySnapshot.docs.map((doc)=> ({
      id: doc.id,
      ...doc.data()
    }));
    return listaCompras;
  } catch (error) {
    console.error("Erro ao carregar comanda: ", error);
    alert("Erro ao carregar comanda do cliente")
    return[];
  }


}