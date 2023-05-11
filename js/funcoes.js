function dadoConstrutor(id,texto,situacao = false){
    return {
        id,
        texto,
        situacao
    }
}

function loadListaLS(listaArray,ul){
    if(listaArray){
        listaArray.forEach(item =>{
            const listaFazer = criaLi(item)//item.texto, item.id
            ul.appendChild(listaFazer)
        })
    }
}

function adicionarTarefa(){
    const texto = inpFazer
    if(texto.value){
        const dados = dadoConstrutor(generateId(),texto.value)
        const listaFazer = criaLi(dados)
        ulMeio.appendChild(listaFazer)
        texto.value =''
        listaClassificar.push(dados)
        nomeListaRemetente = 'listaClassificar'
        localStorage.setItem(nomeListaRemetente, JSON.stringify(listaClassificar))
    }else{
        inpFazer.focus()
    }
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
    let remetenteAtualiza = fnRemetente(remetente,valor)
    fnDestinatario(destinatario,valor)
    const dadosAtualizados = {
        remetente : remetenteAtualiza,
        destinatario : destinatario
    }
    return dadosAtualizados
}

function retornaLista(listaString){
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
function listaAtualizada(array,valorQueSai){
    let ln = array.filter(item =>  item.texto !== valorQueSai.texto)

    return ln
}

function drop(ev){
    ev.preventDefault();
    let dadoRemetente = JSON.parse(ev.dataTransfer.getData("text"))//peguei o id
    console.log(dadoRemetente);
    if(ev.target.nodeName === 'UL'){
        ev.target.appendChild(document.getElementById(dadoRemetente.id))
    }
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
function modalUl(ul){
    modal.style.display = 'flex'
    configLayout.forEach(item =>{
        if(item.id === ul){
            ulModal.style.backgroundColor = item.cor
        }
    })
}
function ampliaLista(ev) {
    console.log(ev);
    cardUl.innerHTML = ''
    listaAmplia = ev.target.parentNode.childNodes[1].id
    liOrigemAmplia = $all(`#${listaAmplia} li`)
    const lista = retornaLista(listaAmplia)
    modalUl(listaAmplia)
    loadListaLS(lista,cardUl)
}
function lixoListar(){
    modalUl(listaAmplia)
    loadListaLS(lixeira)
}
function fecharModal(){
    modal.style.display = 'none'
    listaAmplia = null
}
//gerar id aleatorio
function generateId() {
    const maxId = 100000;
    const randomNum = Math.floor(Math.random() * maxId);
    return randomNum.toString();
}
///////////////// timer
// HTML
//<div class="">
//   <h1>Timer</h1>
//   <div class="timer">
//     <div class="progress"></div>
//     <div class="time">00:00</div>
//   </div>
//   <button type="button" name="button" onclick="startTimer()">Start</button>
//   <button type="button" name="button" onclick="stopTimer()">Stop</button>
// </div>
let interval;
let time = 0;
let timerRunning = false;

function startTimer() {
if (!timerRunning) {
interval = setInterval(updateTimer, 1000);
timerRunning = true;
}
}

function stopTimer() {
clearInterval(interval);
time = 0;
updateProgress();
timerRunning = false;
}

function updateTimer() {
  time++;
  updateProgress();
}

function updateProgress() {
  const progressBar = document.querySelector(".progress");
  const timeDisplay = document.querySelector(".time");
  const progress = (time / 60) * 100;
  progressBar.style.width = progress + "%";
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timeDisplay.textContent = `${padZeroes(minutes)}:${padZeroes(seconds)}`;
}

function padZeroes(num) {
return num.toString().padStart(2, "0");
}
