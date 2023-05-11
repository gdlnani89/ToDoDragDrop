function paletaLayout(){
  const itensPaleta = []
  const vermelho = itemPaleta('vermelho')
  vermelho.setAttribute('onclick', "corSeleciona(event)")
  const amarelo = itemPaleta('amarelo')
  amarelo.setAttribute('onclick', "corSeleciona(event)")
  const azul = itemPaleta('azul')
  azul.setAttribute('onclick', "corSeleciona(event)")
  const verde = itemPaleta('verde')
  verde.setAttribute('onclick', "corSeleciona(event)")
  const minimizar = itemPaleta('minimizar', 'Minimizar lista')
  minimizar.setAttribute('onclick', "minimizar(event)")
  const maximizar = itemPaleta('maximizar', 'Maximizar lista')
  maximizar.classList.add('some')
  maximizar.setAttribute('onclick', "maximizar(event)")
  const ativo = itemPaleta('ativo','Excluir lista')
  ativo.setAttribute('onclick', "ativarDesativar(event)")

  itensPaleta.push(vermelho,amarelo,azul,verde,minimizar,maximizar,ativo)

  return itensPaleta
}

function itemPaleta(id, title = ''){
  const span = $cria('span')
  span.setAttribute('id', id)
  span.setAttribute('title', title)
  return span
}
