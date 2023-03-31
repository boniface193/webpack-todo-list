import ShowItem from './showTodo.js';

const submitForm = document.getElementById('addItem');
const todos = [];
let counter = 0;

class CreateItem {
  constructor(description, viewList) {
    this.description = description;
    this.viewList = viewList;
  }

  showList() {
    const showList = new ShowItem(this.viewList);
    showList.showListItem();
  }

  saveItems() {
    submitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const storage = JSON.parse(localStorage.getItem('payLoad'));
      if (storage && this.description[0].value !== '') {
        storage.push({
          description: this.description[0].value,
          completed: false,
          index: counter += 1,
        });
        localStorage.setItem('payLoad', JSON.stringify(storage));
      } else if (this.description[0].value !== '') {
        todos.push({
          description: this.description[0].value,
          completed: false,
          index: counter += 1,
        });
        localStorage.setItem('payLoad', JSON.stringify(todos));
      } else {
        this.description[0].value = 'Empty Value';
      }
      this.showList();
      submitForm.reset();
    });
  }
}

export default CreateItem;