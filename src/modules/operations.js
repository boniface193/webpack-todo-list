class Operation {
  static edit(editable, deleteItem) {
    editable.forEach((editItem, index) => {
      const getParentElement = editItem.parentElement;
      getParentElement.addEventListener('mousedown', () => {
        editItem.parentElement.classList.add('edited-class');
        editItem.parentElement.childNodes[5].classList.add('d-none');
        editItem.parentElement.childNodes[7].classList.remove('d-none');
      });
      getParentElement.addEventListener('mouseleave', () => {
        editItem.parentElement.classList.remove('edited-class');
        editItem.parentElement.childNodes[5].classList.remove('d-none');
        editItem.parentElement.childNodes[7].classList.add('d-none');
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

  static completedTodo(completed) {
    completed.forEach((completedItem, i) => {
      const storage = JSON.parse(localStorage.getItem('payLoad'));
      if (storage[i].completed) {
        completedItem.parentNode.classList.toggle('line-through');
      }
      completedItem.addEventListener('click', () => {
        const storage = JSON.parse(localStorage.getItem('payLoad'));
        const todo = {
          description: storage[i].description,
          completed: completedItem.checked,
          index: storage[i].index,
        };
        storage.splice(i, 1, todo);
        localStorage.setItem('payLoad', JSON.stringify(storage));
        completedItem.parentNode.classList.toggle('line-through');
      });
    });
  }

  static clearAllCompleted(clearAll) {
    clearAll.addEventListener('click', () => {
      const storage = JSON.parse(localStorage.getItem('payLoad'));
      const getItem = storage.filter((completedItem) => completedItem.completed !== true);
      const getAllLi = document.querySelectorAll('.editable');
      for (let index = 0; index < storage.length; index += 1) {
        if (storage[index].completed === true) {
          getAllLi[index].remove();
        }
      }
      localStorage.setItem('payLoad', JSON.stringify(getItem));
    });
  }
}

export default Operation;