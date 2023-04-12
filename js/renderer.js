const $ = seletor => document.querySelector(seletor)
const $id = id => document.getElementById(id)
const $all = elem => document.querySelectorAll(elem)
const $cria = tag => document.createElement(tag)
//carrega configuracao
// const listaClassificarRender = JSON.parse(localStorage.getItem('listaClassificar'))
// const listaClassificarRender = localStorage.getItem('listaClassificar')

let layout = JSON.parse(localStorage.getItem('configuracoes'))
layout ? configCor = layout : layout = configCor
layout.forEach(item => {
    const ul = $id(item.id)
    ul.style.backgroundColor = item.cor
});
//elementos da header
const inpFazer = $('#tarefaTexto')
inpFazer.addEventListener('keydown', function(event){
    if(event.keyCode === 13){
        adicionarTarefa()
    }
})
//section
const ulMeio = $('#listaClassificar')
if(listaClassificar){
    listaClassificar.forEach(item =>{
        const listaFazer = criaLi(item.texto, item.id)
        ulMeio.appendChild(listaFazer)
    })
}
const ulUrgenteImportante = $('#urgenteImportante')
if(urgenteImportante){
    urgenteImportante.forEach(item =>{
        const listaFazer = criaLi(item.texto, item.id)
        ulUrgenteImportante.appendChild(listaFazer)
    })
}
const ulUrgenteNaoImportante = $('#urgenteNaoImportante')
if(urgenteNaoImportante){
    urgenteNaoImportante.forEach(item =>{
        const listaFazer = criaLi(item.texto, item.id)
        ulUrgenteNaoImportante.appendChild(listaFazer)
    })
}
const ulNaoUrgenteImportante = $('#naoUrgenteImportante')
if(naoUrgenteImportante){
    naoUrgenteImportante.forEach(item =>{
        const listaFazer = criaLi(item.texto, item.id)
        ulNaoUrgenteImportante.appendChild(listaFazer)
    })
}
const ulNaoUrgenteNaoImportante = $('#naoUrgenteNaoImportante')
if(naoUrgenteNaoImportante){
    naoUrgenteNaoImportante.forEach(item =>{
        const listaFazer = criaLi(item.texto, item.id)
        ulNaoUrgenteNaoImportante.appendChild(listaFazer)
    })
}
//pegar todos span cores
const allCoresSpan = $all('.cores span')

