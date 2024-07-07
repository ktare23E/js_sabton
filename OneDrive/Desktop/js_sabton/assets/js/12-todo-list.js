const todoList = [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  },
  {
    name: "wash dishes",
    dueDate: "2022-12-22",
  },
];
let bodyElement = document.body;
let addButton = document.querySelector('.add-todo-button');

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject,index)=>{
    const { name, dueDate } = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button">Delete</button> 
      `;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  let deleteButton = document.querySelectorAll('.delete-todo-button');

  deleteButton.forEach((button,index)=>{
    button.addEventListener('click',()=>{
      todoList.splice(index,1);
      renderTodoList();
    });
  });
  
}



const myEvent = function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  if(name === ''){
    alert('Please enter a name for your todo list');
  }else if( dueDate === ''){
    alert('Please enter a date for your todo list');
  }else{
    todoList.push({
      //name: name,
      //dueDate: dueDate,
      name,
      dueDate,
    });
  
    inputElement.value = "";
    dueDate.value = "";
    renderTodoList();
  }
}


bodyElement.addEventListener('keydown',(event)=>{
  if(event.key === 'Enter'){
    myEvent();
  }
});

addButton.addEventListener('click',myEvent);


