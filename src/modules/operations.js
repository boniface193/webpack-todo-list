class Operation {
  static edit(editable, deleteItem) {
    editable.forEach((editItem, index) => {
      editItem.addEventListener('mousedown', () => {
        editItem.classList.add('edited-class');
        editItem.childNodes[5].classList.add('d-none');
        editItem.childNodes[7].classList.remove('d-none');
      });
      editItem.addEventListener('mouseleave', () => {
        editItem.classList.remove('edited-class');
        editItem.childNodes[5].classList.remove('d-none');
        editItem.childNodes[7].classList.add('d-none');
      });
      editItem.addEventListener('input', (e) => {
        const storage = JSON.parse(localStorage.getItem('payLoad'));
        const todo = {
          description: e.target.value,
          completed: storage[index].completed,
          index: index + 1,
        };
        storage.splice(index, 1, todo);
        localStorage.setItem('payLoad', JSON.stringify(storage));
      });
    });

    deleteItem.forEach((deleteSingleItem, ids) => {
      deleteSingleItem.addEventListener('click', () => {
        const storage = JSON.parse(localStorage.getItem('payLoad'));
        storage.splice(ids, 1);
        storage.forEach((storedIndex, id) => {
          storedIndex.index = id + 1;
        });
        localStorage.setItem('payLoad', JSON.stringify(storage));
        deleteSingleItem.parentNode.remove();
      });
    });
  }
}

export default Operation;