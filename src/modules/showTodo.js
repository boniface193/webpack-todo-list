import Operation from './operations.js';

class ShowItem {
  constructor(list) {
    this.list = list;
  }

  showListItem() {
    this.list.innerHTML = '';
    const storage = JSON.parse(localStorage.getItem('payLoad'));
    if (storage !== null) {
      storage.forEach((listItem) => {
        this.list.innerHTML += `
        <li class="pa-3 editable align-center d-flex h-rule">
          <input type="checkbox" class="completed" ${listItem.completed ? 'checked' : undefined}>
          <input type="text" class="edited" value="${listItem.description}" />
          <i class="fa-solid fa-ellipsis-vertical px-4"></i>
          <i class="fa-solid fa-trash-can px-4 d-none"></i>
        </li>`;
      });

      const editable = document.querySelectorAll('.edited');
      const completed = document.querySelectorAll('.completed');
      const deleteItem = document.querySelectorAll('.fa-trash-can');
      const clearAll = document.querySelector('.clear-text');
      Operation.edit(editable, deleteItem);
      Operation.completedTodo(completed);
      Operation.clearAllCompleted(clearAll);
    }
  }
}

export default ShowItem;