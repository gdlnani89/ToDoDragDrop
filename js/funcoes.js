let configCor =[    
    {
        "id" : "urgenteImportante",
        "cor" : ""
    },
    {
        "id" : "urgenteNaoImportante",
        "cor" : ""
    },
    {
        "id" : "naoUrgenteImportante",
        "cor" : ""
    },
    {
        "id" : "naoUrgenteNaoImportante",
        "cor" : ""
    }
]
let listaClassificar = localStorage.getItem('listaClassificar') ? JSON.parse(localStorage.getItem('listaClassificar')) : []  
let urgenteImportante = localStorage.getItem('urgenteImportante') ? JSON.parse(localStorage.getItem('urgenteImportante')) : []
let naoUrgenteImportante = localStorage.getItem('naoUrgenteImportante') ? JSON.parse(localStorage.getItem('naoUrgenteImportante')) : []
let urgenteNaoImportante = localStorage.getItem('urgenteNaoImportante') ? JSON.parse(localStorage.getItem('urgenteNaoImportante')) : []
let naoUrgenteNaoImportante = localStorage.getItem('naoUrgenteNaoImportante') ? JSON.parse(localStorage.getItem('naoUrgenteNaoImportante')) : []

function adicionarTarefa(){
    const texto = inpFazer
    if(texto.value){
        const dados = {
            texto : texto.value,
            id : generateId()
        }
        const listaFazer = criaLi(dados.texto, dados.id)
        ulMeio.appendChild(listaFazer)
        texto.value =''
        listaClassificar.push(dados)
        localStorage.setItem('listaClassificar', JSON.stringify(listaClassificar))
    }else{
        inpFazer.focus()
    }
}

function listaAtualizada(array,valorQueSai){
    let ln = array.filter(item =>  item.texto !== valorQueSai.texto)
    console.log(ln);
    return ln
}
function listaAtualizadaDestinatario(lista,valor){
    const dados = {
        texto : valor.texto,
        id : valor.id
    }

    lista.push(dados)
}
function listasTroca(
    fnRemetente,
    fnDestinatario,
    remetente, 
    destinatario, 
    valor
    )
    {
    //remente recebe a lista filtrada menos o valor
    //como passar o remetente? ou como identificar?
    //salvar no localStorage
    //destinatario faz um push do valor
    // let remetenteAtualiza = remetente.filter(item => item.texto !== valor)
    let remetenteAtualiza = fnRemetente(remetente,valor)
    fnDestinatario(destinatario,valor)
    const dadosAtualizados = {
        remetente : remetenteAtualiza,
        destinatario : destinatario
    }
    return dadosAtualizados
}

function criaLi(tarefaTexto,id){
    const idGerado = generateId()
    const li = $cria('li')
    const sTexto = $cria('span')
    const sCheck = $cria('input')
    const sCheckLabel = $cria('label')
    const sLixeira = $cria('span')
    const sMover = $cria('span')
    sTexto.classList.add('texto')
    sCheck.classList.add('check')
    sCheck.classList.add('red')
    sCheck.setAttribute('type', 'checkbox')
    sCheck.setAttribute('id', idGerado)
    sCheckLabel.setAttribute('for', idGerado)
    sLixeira.innerHTML = excluir
    sMover.innerHTML = mover
    sLixeira.classList.add('lixeira')
    sMover.classList.add('mover')
    sTexto.innerText = tarefaTexto 
    li.appendChild(sTexto)
    li.appendChild(sCheck)
    li.appendChild(sCheckLabel)
    li.appendChild(sLixeira)
    li.appendChild(sMover)
    li.setAttribute("draggable", true)
    li.setAttribute("id", id)
    li.addEventListener('dragstart', function (event) {
        console.log(event.target.parentElement);
        const dadoEnvio = {
            id : event.target.id,//id da li
            listaRemetente : event.target.parentElement.id,
            texto : event.target.innerText// texto da li
        }
        event.dataTransfer.setData("text", JSON.stringify(dadoEnvio))     
        this.style.opacity = '0.4'
    })
    li.addEventListener('dragend', function (event) {
         this.style.opacity = '1'
         const dragItemId = event.dataTransfer.getData('text/plain');
         console.log(dragItemId);
    })

    return li
}
function retornaLista(listaString){
    console.log(listaString);
    if(listaString == 'urgenteImportante'){
        return urgenteImportante
    }  
    if(listaString == 'naoUrgenteImportante'){
        return naoUrgenteImportante
    }  
    // listaString === 'naoUrgenteImportante' ? naoUrgenteImportante : []
    if(listaString === 'urgenteNaoImportante'){
        return urgenteNaoImportante
    }
    if(listaString === 'naoUrgenteNaoImportante'){
        return naoUrgenteNaoImportante
    }
    if(listaString === 'listaClassificar'){
        return listaClassificar
    }
}
function drop(ev){
    ev.preventDefault();
    let liDrop = JSON.parse(ev.dataTransfer.getData("text"))
    ev.target.appendChild(document.getElementById(liDrop.id))
    console.log(liDrop.listaRemetente);
    let nomeRemetente = liDrop.listaRemetente
    const remetente = retornaLista(nomeRemetente)
    let nomeDestinatario = ev.target.id
    const destinatario = retornaLista(nomeDestinatario)
    const valor = liDrop

    const dadosParaLs = 
        listasTroca(
            listaAtualizada,
            listaAtualizadaDestinatario,
            remetente,
            destinatario,
            valor
            )
    // localStorage.removeItem(liDrop.listaRemetente)
    // localStorage.setItem(liDrop.listaRemetente,JSON.stringify(lsNova))
    localStorageListas.atualizar(nomeRemetente,dadosParaLs.remetente)
    localStorageListas.atualizar(nomeDestinatario,dadosParaLs.destinatario)
    // localStorageListas.remover(nomeRemetente)
    // console.log(dadosParaLs.remetente);

}
function allowDrop(ev) {
    ev.preventDefault();
}
function moverElemento(remetente, destinatario, id) {
    const index = remetente.findIndex(elemento => elemento.id === id); // Busca o índice do elemento com o id informado no array remetente
    if (index !== -1) { // Se o elemento foi encontrado
      const elemento = remetente.splice(index, 1)[0]; // Remove o elemento do array remetente e armazena em uma variável
      destinatario.push(elemento); // Adiciona o elemento ao array destinatário
    }
  }

function corSeleciona(ev){
    const eleSpan = ev.target;
    const ulId = eleSpan.parentNode.previousElementSibling.id
    const elem = $id(ulId)
    if(ev.target.id === 'vermelho'){
        elem.style.backgroundColor = '#830404'
        configCor.forEach(item =>{
            if(item.id === ulId)item.cor = '#830404'
        })
    }
    if(ev.target.id === 'amarelo'){
        elem.style.backgroundColor = '#ff9900'
        configCor.forEach(item =>{
            if(item.id === ulId)item.cor = '#ff9900'
        })
    }
    if(ev.target.id === 'azul'){
        elem.style.backgroundColor = '#007bff'
        configCor.forEach(item =>{
            if(item.id === ulId)item.cor = '#007bff'
        })
    }   
    if(ev.target.id === 'verde'){
        elem.style.backgroundColor = '#37ff00'
        configCor.forEach(item =>{
            if(item.id === ulId)item.cor = '#37ff00'
        })
    } 
    localStorage.setItem('configuracoes', JSON.stringify(configCor))
}
/* em vez de colocar o evento click direto no html, poderia ter feito como abaixo
allCoresSpan.forEach(span =>{
    span.innerHTML = bgCor
    span.onclick = function(){
        const ulId = span.parentNode.previousElementSibling.id
        console.log(ulId);
        console.log(this.id);
        const cor = $(`#${ulId} #${this.id} svg`)
        console.log(cor);
        // cor.style.display = 'none'
    }
}) 
*/
//gerar id aleatorio
function generateId() {
    const maxId = 100000;
    const randomNum = Math.floor(Math.random() * maxId);
    return randomNum.toString();
}
function modalUl(ul){
    const modal = $('.modal')
    const ulModal = $('.principal')
    modal.style.display = 'flex'
    configCor.forEach(item =>{
        if(item.id === ul){
            ulModal.style.backgroundColor = item.cor
        }
    })
}
const localStorageListas = {
    salvar : (nome , listaArray) => localStorage.setItem(nome,JSON.stringify(listaArray)),
    remover : nome => localStorage.removeItem(nome),
    obter : nome => JSON.parse(localStorage.getItem(nome)),
    atualizar : (nome, listaArrayAtualizada)=>{
        localStorageListas.remover(nome)
        localStorageListas.salvar(nome, listaArrayAtualizada)
    }
}