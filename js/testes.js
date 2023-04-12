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
  