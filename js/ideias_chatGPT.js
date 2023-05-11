function onDropEnd(event) {
    const dragItemId = event.dataTransfer.getData('text/plain');
    const dragItemIndex = listaRemetente.findIndex(item => item.id === dragItemId);
    if (dragItemIndex !== -1) {
      listaDestinatario.push(listaRemetente[dragItemIndex]);
      listaRemetente.splice(dragItemIndex, 1);
      localStorage.setItem('listaRemetente', JSON.stringify(listaRemetente));
      localStorage.setItem('listaDestinatario', JSON.stringify(listaDestinatario));
    }
  }

/*  Quero fazer a seguinte funcionalidade,  ao marcar item na lista, fazer com que ele vá para o final da lista,
 além disso criar efeito de item indo para o final, é possível?
 Sim, é possível fazer isso. Você pode adicionar um evento de clique nos itens da lista e,
 quando o usuário clicar em um item, movê-lo para o final da lista. Para criar um efeito de animação ao mover o item
 para o final da lista, você pode usar a função setInterval para atualizar a posição do item em um intervalo de tempo,
 dando a impressão de que ele está se movendo gradualmente para o final da lista.
 Aqui está um exemplo de como você pode implementar essa funcionalidade:
 */
 function moverParaFinal(li) {
  const lista = li.parentNode;
  const todos = lista.getElementsByTagName("li");
  const last = todos[todos.length-1];
  if (li !== last) {
    const next = li.nextSibling;
    lista.insertBefore(li, last.nextSibling);
    const interval = setInterval(() => {
      if (li.nextSibling === null) {
        clearInterval(interval);
      } else {
        lista.insertBefore(li, li.nextSibling.nextSibling);
      }
    }, 50);
  }
}

ulMeio.addEventListener('click', function(event) {
  const element = event.target;
  if (element.tagName === "SPAN" && element.classList.contains("check")) {
    const li = element.parentNode;
    li.style.opacity = '0.4';
    setTimeout(() => {
      moverParaFinal(li);
      li.style.opacity = '1';
    }, 500);
  }
});
/*
Este exemplo adiciona um evento de clique no elemento ulMeio (a lista) e verifica se o elemento clicado é uma caixa
de seleção (<span> com a classe .check). Em seguida, ele chama a função moverParaFinal para mover o item clicado para o
final da lista. A função usa setInterval para atualizar a posição do item em um intervalo de tempo (50 milissegundos, neste caso)
até que ele atinja o final da lista. A função também adiciona um efeito de transição (diminuindo a opacidade do item antes de
movê-lo e aumentando novamente após o movimento).
*/
/*
Para criar um timer em JavaScript, você pode utilizar a função setInterval(). Essa função é usada para executar
uma função repetidamente em intervalos de tempo definidos.
Aqui está um exemplo básico de como criar um timer em JavaScript: */
// define o tempo inicial em segundos
let seconds = 0;

// define a função que será executada a cada segundo
function timer() {
  // incrementa o tempo em 1 segundo
  seconds++;

  // exibe o tempo no console
  console.log(seconds);
  if(seconds == 10)clearInterval()
}

// inicia o timer
setInterval(timer, 1000); // chama a função timer a cada 1000 milissegundos (1 segundo)

let count = 0;

const intervalId = setInterval(() => {
  console.log(count);
  count++;

  if (count === 10) {
    clearInterval(intervalId);
  }
}, 1000);
//Em uma ul gostaria de pegar e mudar de posição a li, é possível 
/*
Sim, é possível alterar a posição de uma lista dentro de uma ul (unordered list) usando HTML e CSS.
Você pode usar o CSS para definir o estilo de lista desejado e, em seguida, alterar a ordem dos elementos da lista usando JavaScript.
Aqui está um exemplo de como fazer isso:
Claro! Aqui está um exemplo básico de como criar um timer com uma barra de progresso em HTML, CSS e JavaScript:

HTML:
```html



Timer






00:00



Start
Stop


```

CSS:
```css
.timer {
position: relative;
height: 30px;
width: 200px;
background-color: #eee;
border-radius: 15px;
}

.progress {
position: absolute;
top: 0;
left: 0;
height: 100%;
background-color: #2196f3;
border-radius: 15px;
transition: width 1s linear;
}

.time {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 20px;
font-weight: bold;
}
```
/*
JavaScript:
```javascript
*/
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
```
/*
Este exemplo define um temporizador que é iniciado ao clicar no botão "Start" e é interrompido ao clicar no botão "Stop". O temporizador é representado visualmente por uma barra de progresso que cresce gradualmente à medida que o tempo passa. O tempo é exibido no centro da barra de progresso. A barra de progresso leva 60 segundos para preencher completamente, o que significa que cada segundo do temporizador preenche aproximadamente 1,67% da barra de progresso.

Espero que este exemplo seja útil para você! Lembre-se de que você pode personalizar o estilo e a funcionalidade do temporizador de acordo com suas necessidades.
11:38
tem menu de contexto
*/
