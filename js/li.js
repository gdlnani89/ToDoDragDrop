function criaLi(dado){//tarefaTexto,id
    const idGerado = generateId()
    const li = $cria('li')
    const sTexto = $cria('span')
    const sCheck = $cria('input')
    const sCheckLabel = $cria('label')
    const sLixeira = $cria('span')
    const sMover = $cria('span')
    sTexto.classList.add('texto')
    sTexto.addEventListener('click', ()=>{
      const texto = sTexto.innerText
      const temp = $cria('textarea')
      temp.value = texto
      document.body.appendChild(temp)
      temp.select()
      document.execCommand('copy')
      document.body.removeChild(temp)
    })
    sTexto.setAttribute('title', 'Clique para copiar texto')
    sCheck.classList.add('check')
    if(dado.situacao === true){
        sCheck.checked = true
        sTexto.classList.toggle('risca')
    }else{
      sCheck.checked = false
    }
    sCheck.setAttribute('type', 'checkbox')
    sCheck.setAttribute('id', idGerado)
    sCheck.onclick = function moveItemParaFinal(event) {
        dado.situacao === false ? dado.situacao = true : dado.situacao = false
        const lista = event.target.parentNode.parentNode;
        const item = event.target.parentNode;
        if (event.target.checked) {
            const listaAtualNome = event.target.parentNode.parentNode.id
            const listaAtualArray = retornaLista(listaAtualNome)
            localStorageListas.atualizar(listaAtualNome,listaAtualArray)
            lista.removeChild(item);
            lista.appendChild(item);
        }else {
          const listaAtualNome = event.target.parentNode.parentNode.id
          const listaAtualArray = retornaLista(listaAtualNome)
          localStorageListas.atualizar(listaAtualNome,listaAtualArray)
          lista.removeChild(item);
          lista.appendChild(item);
        }
        sTexto.classList.toggle('risca')
      }
    sCheckLabel.setAttribute('for', idGerado)
    sLixeira.classList.add('lixeira')
    sMover.classList.add('mover')
    sMover.setAttribute('title', 'Mover tarefa')
    sLixeira.onclick = function (event){
        const liId = $id(event.target.parentNode.id)//peguei a ID da LI
        const listaNome = event.target.parentNode.parentNode.id//peguei o nome da UL que está na ID
        const lista = retornaLista(listaNome)//retorno array da lista
        const indiceItemExcluir = lista.findIndex(item => item.id === liId.id)
        if (indiceItemExcluir !== -1) {
            lixeira.push(lista[indiceItemExcluir])
            lista.splice(indiceItemExcluir, 1);
            localStorage.setItem(listaNome, JSON.stringify(lista));
            localStorage.setItem('lixeira', JSON.stringify(lixeira));
          }
        liId.remove()
    }
    sMover.classList.add('mover')
    sTexto.innerText = dado.texto
    li.appendChild(sTexto)
    li.appendChild(sCheck)
    li.appendChild(sCheckLabel)
    li.appendChild(sLixeira)
    li.appendChild(sMover)
    li.setAttribute("draggable", true)
    li.setAttribute("id", dado.id)
    li.setAttribute("situacao", dado.situacao)
    li.addEventListener('dragstart', function (event) {
        dadoTransporte = dado
        nomeListaRemetente = event.target.parentElement.id//usar para fazer
        event.dataTransfer.setData("text", JSON.stringify(dado))//era dadoEnvio
        this.style.opacity = '0.4'
    })
    li.addEventListener('dragend', function (event) {
         this.style.opacity = '1'
        const listaDestinatario = event.target.parentElement.id
        const listaArrayRem = retornaLista(nomeListaRemetente)
        const indTextoRem = listaArrayRem.findIndex(item => item.id === dadoTransporte.id)//era dadoRecebido
        //Remetente atualiza e set no ls
        listaArrayRem.splice(indTextoRem, 1)
        localStorageListas.atualizar(nomeListaRemetente,listaArrayRem)
        //Destinatario
        const listaArrayDest = retornaLista(listaDestinatario)
        listaArrayDest.push(dadoTransporte)//era dadoRecebido
        localStorageListas.atualizar(listaDestinatario,listaArrayDest)
    })

    return li
}
