// document.cookie = `name=John; max-age=${20}`;
// document.cookie = `name=John; max-age=${-1}`;
// console.log(document.cookie);
// document.cookie = 'age=; path=/about; expires=Thu, 18 Apr 2023 12:00:00 UTC;';

// localStorage.setItem('name', 'John');
// localStorage.setItem('isMarried', 'true');
// localStorage.setItem('age', 25);
// localStorage.removeItem('name');
// console.log(localStorage.getItem('age'));
// console.log(localStorage.length);
// localStorage.clear();

window.addEventListener('DOMContentLoaded', () => {
  generateTodos();
});

function getTodos() {
  let localTodoDataStr = localStorage.getItem('tododata');
  let localTodoData = JSON.parse(localTodoDataStr);
  return Array.isArray(localTodoData) ? localTodoData : [];
}
function setTodos(arr) {
  localStorage.setItem('tododata', JSON.stringify(arr));
}

function generateTodos() {
  let todos = getTodos();
  let newHTML = '';
  if (todos.length) {
    for (let i = 0; i < todos.length; i++) {
      newHTML += `
      <div class="todo" id="todo${todos[i].id}">
        <span class="status">${todos[i].completed ? '✅' : '❌'}</span>
        <span class="content">${todos[i].content}</span>
        <div class="editInput">
          <input type="text" value="${todos[i].content}">
        </div>
        <div class="buttons">
          <span class="edit" onclick="editTodo(${todos[i].id})">Edit</span>
          <span class="save" onclick="saveTodo(${todos[i].id})">Save</span>
          <span class="delete" onclick="removeTodo(${
            todos[i].id
          })">Delete</span>
        </div>
      </div>
      `;
    }
  } else {
    newHTML = 'Empty ...';
  }
  document.getElementById('todoContainer').innerHTML = newHTML;
}

function createTodo() {
  let todoContent = document.getElementById('todoContent');

  if (todoContent.value) {
    let newTodo = {
      id: getNewId(),
      content: todoContent.value,
      completed: false,
    };

    let oldTodos = getTodos();
    oldTodos.push(newTodo);

    setTodos(oldTodos);
    generateTodos();
    todoContent.value = '';
  } else {
    alert('Please enter content!');
  }
}

function removeTodo(id) {
  let oldTodos = getTodos();
  oldTodos = oldTodos.filter((todo) => todo.id != id);
  setTodos(oldTodos);
  generateTodos();
}

function editTodo(id) {
  let contentSpan = document.querySelector(`#todo${id} span.content`);
  let editInputDiv = document.querySelector(`#todo${id} div.editInput`);
  let editBtn = document.querySelector(`#todo${id} span.edit`);
  let saveBtn = document.querySelector(`#todo${id} span.save`);
  contentSpan.style.display = 'none';
  editInputDiv.style.display = 'block';
  editBtn.style.display = 'none';
  saveBtn.style.display = 'block';
}
function saveTodo(id) {
  let editInputDiv = document.querySelector(`#todo${id} div.editInput`);
  let input = editInputDiv.children[0];
  if (input.value) {
    let oldTodos = getTodos();
    oldTodos = oldTodos.map((todo) =>
      todo.id == id ? { ...todo, content: input.value } : todo
    );
    setTodos(oldTodos);
    generateTodos();
  } else {
    alert('Please enter content!');
  }
}

function getNewId() {
  let todos = getTodos();
  let newId = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id > newId) {
      newId = todos[i].id;
    }
  }
  return newId + 1;
}
