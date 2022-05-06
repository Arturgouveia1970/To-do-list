import './styles.css';
import addElem from './modules/add-elements.js';
import Tasklist from './modules/class-task-list.js';
import refreshList from './modules/refresh-list.js';

const taskList = new Tasklist();

// DOM Manipulations
const mainContainer = document.querySelector('.todo-list-container');

// header, title and input
mainContainer.innerHTML = `<div class="row">
<h1>Today's To Do</h1>
<i class="fa-solid fa-rotate fa-lg font-awesome-icon"></i>;
</div>`;
const inputContainer = addElem('form', [], mainContainer);
const inputText = addElem('input', ['input-add-task'], inputContainer);
inputText.setAtribute('placeholder', 'Add to your list...');
addElem('i', ['fa-solid', 'fa-arrow-right-to-bracket', 'fa-sm', 'font-awesome-icon'], inputContainer);

// the list
const listContainer = addElem('div', [], mainContainer);
const clearBtn = addElem('button', ['button'], mainContainer);
clearBtn.text.content = 'Clear all completed';

inputContainer.onsubmit = (e) => {
  e.preventDefault();
  taskList.addTask(inputText.value);
  inputContainer.reset();
  refreshList(taskList, listContainer);
};

clearBtn.onclick = () => {
  Tasklist.clearCompleted();
  refreshList(taskList, listContainer);
};

refreshList(taskList, listContainer);