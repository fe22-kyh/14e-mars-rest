const titleField = document.querySelector('.title-field');
const contentField = document.querySelector('.content-field');
const todoSubmitBtn = document.querySelector('.todo-submit-btn');
const todoList = document.querySelector('.todo-list');


todoSubmitBtn.addEventListener('click', event => {
  createNewTodo();
});


// Fasad för samtliga (alla möjliga) json anrop
async function sendJson(url, method, data) {
  const fetchOptions = {
    method: method,
    body: JSON.stringify(data), // Gör om data till json
    headers: {
      "Content-Type": "application/json" // Media type json
    }
  }

  return await fetch(url, fetchOptions);
}

async function createNewTodo() {
  const todo = {
    title: titleField.value,
    content: contentField.value
  }

  let response = await sendJson("http://127.0.0.01:3030/api/todo", "PUT", todo);
  console.log(await response.json()); // samma svar som i thunderclient

  refreshListContent();
}

async function refreshListContent() {
  let result = await fetch("http://127.0.0.1:3030/api/todo/");
  let todos = await result.json();

  todoList.innerHTML = '';

  for (let todo of todos) {
    let li = document.createElement('li');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');

    h4.textContent = todo.title;
    p.textContent = todo.content;

    li.append(h4, p);

    todoList.append(li);
  }
}

refreshListContent();
