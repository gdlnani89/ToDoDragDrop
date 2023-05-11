
//carrega configuracao
let layout = JSON.parse(localStorage.getItem('configuracoes'))
document.addEventListener('click', function(event){

  if(event.target.className === 'modal')event.target.style.display = 'none'
})
layout ? configLayout = layout : layout = configLayout
layout.forEach(item => {
    const ul = $id(item.id)
    const divPai = $(`#${ul.parentNode.parentNode.id}`)
    const elementosDivPai = divPai.querySelectorAll("*")
    if(item.etiqueta){
      elementosDivPai.forEach(elem => {
        if (elem.tagName === 'H6') {
          elem.innerText = item.etiqueta
        }
      })
    }
    ul.style.backgroundColor = item.cor
});
//elementos da header
const inpFazer = $('#tarefaTexto')
inpFazer.addEventListener('focus', function(){
  $('.fazer').classList.add('focus')
})
inpFazer.addEventListener('blur', function(){
  $('.fazer').classList.remove('focus')
})
inpFazer.addEventListener('keydown', function(event){
    if(event.keyCode === 13){
        adicionarTarefa()
    }
})
//section
const ulMeio = $('#listaClassificar')
loadListaLS(listaClassificar,ulMeio)

const ulUrgenteImportante = $id('urgenteImportante')
loadListaLS(urgenteImportante,ulUrgenteImportante)

const ulUrgenteNaoImportante = $id('urgenteNaoImportante')
loadListaLS(urgenteNaoImportante,ulUrgenteNaoImportante)

const ulNaoUrgenteImportante = $id('naoUrgenteImportante')
loadListaLS(naoUrgenteImportante,ulNaoUrgenteImportante)

const ulNaoUrgenteNaoImportante = $id('naoUrgenteNaoImportante')
loadListaLS(naoUrgenteNaoImportante,ulNaoUrgenteNaoImportante)
//div config
const divPaletaLayout = $all('.layout')
const spansPaleta = paletaLayout()
divPaletaLayout.forEach(paleta =>{
  spansPaleta.forEach(icon => paleta.appendChild(icon.cloneNode(true)))
})
//pegar todos span cores
const allCoresSpan = $all('.cores span')
//pegar span ampliar
const ampDir = $all('.ampliarD')
const ampEsq = $all('.ampliar')

//modal
const cardUl = $id('mCard')
const modal = $('.modal')
const ulModal = $('.principal')
