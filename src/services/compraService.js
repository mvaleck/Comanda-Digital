import { getDocs, deleteDoc, updateDoc, query, where } from "firebase/firestore"; 
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
        statusPagamento: "pendente",
        pago: false
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
    return false;
  }

  const userId = user.uid;

  try {
    const compraRef = doc(db, "users", userId, "clientes", clienteId, "compras", compraId);
    await updateDoc(compraRef, {
      statusPagamento: "pago",
      pago: true
    });
    alert("Pagamento realizado com sucesso");
    return true;
  } catch (error) {
    console.error("Erro ao confirmar pagamento", error);
    alert("Erro ao confirmar pagamento");
    return false; 
  }
}

//função somar o saldo devedor
export async function calcularSaldoDevedor(clienteId) {
  const user = auth.currentUser;

  if (!user) {
    alert("Usuário não autenticado");
    return 0;
  }

  if (!clienteId) {
    alert("Cliente não informado");
    return 0;
  }

  const userId = user.uid;
  const comprasRef = collection(db, "users", userId, "clientes", clienteId, "compras")
  
  //filtrar somente compras pendentes
  const q = query(comprasRef, where("pago", "==", false));

  try {
    const querySnapshot = await getDocs(q);
    let saldo = 0;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      saldo += Number(data.preco) || 0;
    })

    return saldo;

  } catch (error) {
    console.error("Erro ao calcular saldo devedor", error);
    alert("Erro ao calcular saldo devedor");
    return 0; 
  }


}
