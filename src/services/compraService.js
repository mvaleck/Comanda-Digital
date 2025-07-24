import { getDocs, deleteDoc, updateDoc } from "firebase/firestore"; 
import {auth, db } from "../firebase"
import { collection, addDoc, doc } from "firebase/firestore";

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
        preco: parseFloat(compraData.preco) / 100,  // aqui divide pra salvar em reais
        observacao: compraData.observacao || "",
        criadoEm: new Date(),
        statusPagamento: "pendente"
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

//apagar somente tal compra
export async function deletarCompra (userId, clienteId, compraId) {
  try {
    const comprasRef = doc(db, "users", userId, "clientes", clienteId, "compras", compraId);
    await deleteDoc(comprasRef);
    console.log("Compra deletada com sucesso!")
  } catch (error){
    console.error("Erro ao deletar compra", error);
  }
}

//confirmar pagamento de compra/atualizar status de pagamento
export async function confirmarPagamento(clienteId, compraId) {
  const user = auth.currentUser;

  if (!user) {
    alert("Usuário não autenticado");
    return;
  }

  const userId = user.uid;

  try {
    const compraRef = doc(db, "users", userId, "clientes", clienteId, "compras", compraId);
    await updateDoc(compraRef, {
      statusPagamento: "pago"
    });
    alert("Pagamento realizado com sucesso");
  } catch (error) {
    console.error("Erro ao confirmar pagamento", error);
    alert("Erro ao confirmar pagamento");
  }
}