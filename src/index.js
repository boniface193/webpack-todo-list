import './style.css';
import CreateItem from './modules/createTodo.js';
import ShowItem from './modules/showTodo.js';

const addItem = document.getElementsByName('description');
const viewList = document.getElementById('viewList');

const newClass = new CreateItem(addItem, viewList);
newClass.saveItems();
const showList = new ShowItem(viewList);
showList.showListItem();