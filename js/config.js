let textoTag
let ulNomeTag

function corSeleciona(ev){
    const eleSpan = ev.target;
    const ulId = eleSpan.parentNode.previousElementSibling.id
    const elem = $id(ulId)
    if(ev.target.id === 'vermelho'){
        elem.style.backgroundColor = '#830404'
        configLayout.forEach(item =>{
            if(item.id === ulId)item.cor = '#830404'
        })
    }
    if(ev.target.id === 'amarelo'){
        elem.style.backgroundColor = '#ff9900'
        configLayout.forEach(item =>{
            if(item.id === ulId)item.cor = '#ff9900'
        })
    }
    if(ev.target.id === 'azul'){
        elem.style.backgroundColor = '#007bff'
        configLayout.forEach(item =>{
            if(item.id === ulId)item.cor = '#007bff'
        })
    }
    if(ev.target.id === 'verde'){
        elem.style.backgroundColor = '#37ff00'
        configLayout.forEach(item =>{
            if(item.id === ulId)item.cor = '#37ff00'
        })
    }
    localStorage.setItem('configuracoes', JSON.stringify(configLayout))
}
function minimizar(ev){
  console.log(ev.target.nextElementSibling);
  const divUl = ev.target.parentNode.parentElement.parentNode
  divUl.classList.add('minimizar')
  ev.target.classList.add('some')
  ev.target.nextElementSibling.classList.remove('some')
}
function maximizar(ev){
  console.log(ev.target.parentNode.parentElement.parentNode);
  const divUl = ev.target.parentNode.parentElement.parentNode
  divUl.classList.remove('minimizar')
  ev.target.classList.add('some')
  ev.target.previousElementSibling.classList.remove('some')
}
function ativarDesativar(ev){//divIdRemoveClass
    const divUl = ev.target.parentNode.previousElementSibling.parentNode.parentNode
    const ulNome = ev.target.parentNode.previousElementSibling.id
    divUl.remove()
    configLayout.forEach(item =>{
        if(item.id === ulNome)item.ativo = false
    })
    localStorage.setItem('configuracoes', JSON.stringify(configLayout))
    // divIdRemoveClass.classList.toggle('dividido')
}
function trocarEtiqueta(ev){
  ev.target.style.display ='none'
  ulNomeTag = ev.target.parentNode
  console.log(ulNomeTag);
  const iSalvar = ev.target.nextElementSibling
  iSalvar.style.display ='block'
  const h6 = ev.target.previousElementSibling.previousElementSibling
  const inpH6 = ev.target.previousElementSibling
  const h6Atual = h6.innerText
  inpH6.classList.toggle('visivel')
  inpH6.value = h6Atual
  h6.style.display = 'none'
  inpH6.focus()
}

function salvarEdicaoEtiqueta(ev,h6Tag){
  // pegar nome da lista
  ulNomeTag = ev.target.nextSibling.parentNode.nextElementSibling.firstElementChild.id
  ev.target.style.display ='none'
  const iEditar = ev.target.previousElementSibling
  iEditar.style.display ='block'
  const inpH6 = ev.target.previousElementSibling.previousElementSibling
  // const inpH6 = ev.target.previousElementSibling
  inpH6.classList.toggle('visivel')
  const novaTag = inpH6.value
  h6Tag.innerText = novaTag
  h6Tag.style.display = 'block'
  console.log(configLayout);
  configLayout.forEach(item =>{
      if(item.id === ulNomeTag)item.etiqueta = novaTag
  })
  localStorage.setItem('configuracoes', JSON.stringify(configLayout))
}

function etiquetaEdita(){
    $('#esquerdaCima .editaEtiqueta').classList.toggle('visivel')
}
