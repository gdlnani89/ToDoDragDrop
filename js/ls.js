const localStorageListas = {
    salvar : (nome , listaArray) => localStorage.setItem(nome,JSON.stringify(listaArray)),
    remover : nome => localStorage.removeItem(nome),
    obter : nome => JSON.parse(localStorage.getItem(nome)),
    atualizar : (nome, listaArrayAtualizada)=>{
        localStorageListas.remover(nome)
        localStorageListas.salvar(nome, listaArrayAtualizada)
    }
}