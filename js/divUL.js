<div class="header-ul">
  <div class="etiqueta">
    <h6 id="esquerdaCimaH6">URGENTE/IMPORTANTE</h6>
    <input id="h6Altera" type="text" name="" value="">
    <button type="button" name="button" class="editaEtiqueta" title="Editar nome da lista" onclick="trocarEtiqueta(event)">
    </button>
    <i class="salvaEtiqueta" title="Salvar" onclick="salvarEdicaoEtiqueta(event,esquerdaCimaH6)"></i>
  </div>
  <div class="layout" id="u-i-paleta"></div>
</div>
<div class="ul-container">
  <ul id="urgenteImportante" ondrop="drop(event)" ondragover="allowDrop(event)"></ul>
  <span class="ampliar" onclick="ampliaLista(event)"></span>
</div>
