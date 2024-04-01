let todoList = [];
let userList = [];

toggleLoading();
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET',
})
  .then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      console.log(res);
    }
  })
  .then((data) => {
    userList = data;
    setSelectOptions();
    toggleLoading();
  })
  .catch((err) => {
    console.log(err);
    toggleLoading();
  });

function getAllTodos() {
  toggleLoading();
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'GET',
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        console.log(res);
      }
    })
    .then((data) => {
      todoList = data;
      showTodos();
      toggleLoading();
    })
    .catch((err) => {
      console.log(err);
      toggleLoading();
    });
}

function showTodos() {
  todoList.sort((a, b) =>
    a.completed < b.completed ? -1 : a.completed > b.completed ? 1 : 0
  );
  let newHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    newHTML += `
    <div data-title="${todoList[i].title}">
      <span class="userid" data-title="asdasdasd">User: ${
        userList.find((x) => x.id == todoList[i].userId)?.name || 'Anonym'
      }</span>
      <div>
        <span class="completed" onclick="toggleTodo(${todoList[i].id})">${
      todoList[i].completed ? '✅' : '❎'
    }</span>
        <h2 class="title">${todoList[i].title}</h2>
      </div>
    </div>
    `;
  }
  document.getElementById('todos').innerHTML = newHTML;
}

function toggleTodo(id) {
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id == id) {
      console.log(todoList[i].id, id);
      todoList[i].completed = !todoList[i].completed;
      break;
    }
  }
  showTodos();
}

function setSelectOptions() {
  let newOptions = '';
  for (let i = 0; i < userList.length; i++) {
    newOptions += `<option value="${userList[i].id}">${userList[i].name}</option>`;
  }
  document.getElementById('userId').innerHTML = newOptions;
}

function toggleLoading() {
  document.getElementById('loading').classList.toggle('hidden');
}

window.addEventListener('DOMContentLoaded', toggleLoading);

window.addEventListener('mousemove', (e) => {
  let oldTitleDom = document.getElementById('customTitle');
  if (oldTitleDom) {
    oldTitleDom.remove();
  }
  if (e.target.dataset.title) {
    let titleDom = document.createElement('span');
    titleDom.setAttribute('id', 'customTitle');
    titleDom.innerText = e.target.dataset.title;
    titleDom.style.cssText = `background-color:black; color:white; padding:8px 16px; border-radius:8px; position: fixed; left: ${
      e.clientX + 10
    }px; top: ${e.clientY + 10}px;`;

    document.body.append(titleDom);
  }
});

// let customTitle = null;

// function mouseEnterFunc(e) {
//   if (e.target.dataset.title) {
//     let titleDom = document.createElement('span');
//     titleDom.innerText = e.target.dataset.title;
//     titleDom.style.cssText = `background-color:black; color:white; padding:8px 16px; border-radius:8px; position: fixed; left: ${
//       e.pageX + 10
//     }px; top: ${e.pageY + 10}px;`;
//     document.body.append(titleDom);
//     customTitle = titleDom;
//   }
// }

// function mouseMoveFunc(e) {
//   if (customTitle) {
//     customTitle.style.cssText = `background-color:black; color:white; padding:8px 16px; border-radius:8px; position: fixed; left: ${
//       e.clientX + 10
//     }px; top: ${e.clientY + 10}px;`;
//   }
// }

// function mouseLeaveFunc(e) {
//   customTitle.remove();
//   customTitle = null;
// }
