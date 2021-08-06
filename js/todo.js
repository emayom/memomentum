const todoForm = document.getElementById("todo_form");
const todoInput = todoForm.querySelector("#todo_form input");
const todoList = document.getElementById("todo_list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleTodoSubmit(event) {
    event.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value ="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
        
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos(newTodo);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    if(event.screenX !== 0){
        li.remove();
        toDos = toDos.filter((el)=> el.id !== parseInt(li.id));
        saveToDos();
    }
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id  = newTodoObj.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");

    span.innerHTML = newTodoObj.text;

    btn.innerHTML = "✓";
    btn.style.color = "#fff"
    btn.style.fontSize = "1.3rem"
    btn.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

if(todoForm){
    todoForm.addEventListener("submit", handleTodoSubmit);
}

const saved = localStorage.getItem(TODOS_KEY);

if(saved != null) {
    const parsedToDos = JSON.parse(saved);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

