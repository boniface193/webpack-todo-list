import './style.css';

const todos = [
  { description: 'eating two plates of food every lunch', completed: false, index: 0 },
  { description: 'taking my bath every hour', completed: false, index: 1 },
  { description: 'taking a nap every 8hrs a day', completed: false, index: 2 },
  { description: 'No reasons', completed: true, index: 3 },
  { description: 'no comments', completed: false, index: 4 },
];

const viewList = document.getElementById('viewList');

const showList = () => {
  viewList.innerHTML = '';

  todos.forEach((listItem) => {
    viewList.innerHTML += `
        <li class="py-4">
          <input type="checkbox">
          <span>${listItem.description}</span>
          <i class="fa-solid fa-ellipsis-vertical d-flex justify-end float-right"></i>
        </li>`;
  });
};

showList();