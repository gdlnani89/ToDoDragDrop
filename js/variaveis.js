const $ = seletor => document.querySelector(seletor)
const $id = id => document.getElementById(id)
const $all = elem => document.querySelectorAll(elem)
const $cria = tag => document.createElement(tag)

let configLayout =[
    {
        "id" : "urgenteImportante",
        "cor" : "",
        "etiqueta": "",
        "ativo": true
    },
    {
        "id" : "urgenteNaoImportante",
        "cor" : "",
        "etiqueta": "",
        "ativo": true
    },
    {
        "id" : "naoUrgenteImportante",
        "cor" : "",
        "etiqueta": "",
        "ativo": true
    },
    {
        "id" : "naoUrgenteNaoImportante",
        "cor" : "",
        "etiqueta": "",
        "ativo": true
    }
]
let listaClassificar = localStorage.getItem('listaClassificar') ? JSON.parse(localStorage.getItem('listaClassificar')) : []
let lixeira = localStorage.getItem('lixeira') ? JSON.parse(localStorage.getItem('lixeira')) : []
let urgenteImportante = localStorage.getItem('urgenteImportante') ? JSON.parse(localStorage.getItem('urgenteImportante')) : []
let naoUrgenteImportante = localStorage.getItem('naoUrgenteImportante') ? JSON.parse(localStorage.getItem('naoUrgenteImportante')) : []
let urgenteNaoImportante = localStorage.getItem('urgenteNaoImportante') ? JSON.parse(localStorage.getItem('urgenteNaoImportante')) : []
let naoUrgenteNaoImportante = localStorage.getItem('naoUrgenteNaoImportante') ? JSON.parse(localStorage.getItem('naoUrgenteNaoImportante')) : []

let nomeListaRemetente//usado no evento drag
let listaAmplia//é o id da ul
let liOrigemAmplia//para excluir o li tanto da origem como da modal
let dadoTransporte
