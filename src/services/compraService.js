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


}