


let todoList = JSON.parse(localStorage.getItem("myList")) || 
[];

let resetButton = document.querySelector('.resetButton');

// console.log(resetButton);

resetButton.addEventListener('click', function() {
  localStorage.removeItem('myList');
  location.reload();
});

renderTodoList();

function renderTodoList() {

  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
          deleteTodo(${i});
        " class="delete-todo-button">Delete</button> 
      `;
    todoListHTML += html;

  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function deleteTodo(index){
  todoList.splice(index, 1);
  const myList = JSON.stringify(todoList);
  localStorage.setItem("myList", myList);
  renderTodoList();
}

function addTodo() {

  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate,
  });

  const myList = JSON.stringify(todoList);
  localStorage.setItem("myList", myList);
  inputElement.value = "";

  renderTodoList();
}
