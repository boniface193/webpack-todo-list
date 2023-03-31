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

      const editable = document.querySelectorAll('.editable');
      const deleteItem = document.querySelectorAll('.fa-trash-can');
      Operation.edit(editable, deleteItem);
    }
  }
}

export default ShowItem;