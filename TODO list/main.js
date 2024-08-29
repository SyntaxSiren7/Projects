
function addTodo(task) {
    todos.push({ task: task, completed: false });
    renderTodos();
}
 

function toggleTodoCompletion(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}


function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}


function renderTodos() {
    console.dir(todos);
    
    todoList.innerHTML = '';

    
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const index = i;

       
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
        if (todo.completed) {
            listItem.innerHTML = `<span class="completed">${todo.task}</span>`
        }else{
            listItem.innerHTML = `<span>${todo.task}</span>`
        }
        
        listItem.dataset.index = index; 

        
        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = todo.completed ? 'Undo' : 'Complete';

        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';

       
        listItem.appendChild(completeBtn);
        listItem.appendChild(deleteBtn);

      
        todoList.appendChild(listItem);

       
        completeBtn.addEventListener('click', function (event) {
            toggleTodoCompletion(index);
        });

       
        deleteBtn.addEventListener('click', function (event) {
            deleteTodo(index);
        });
    }
}


let todos = [];

const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');


addTodoButton.addEventListener('click', () => {
    const todoInputValue = todoInput.value;

    if (todoInputValue.trim() !== '') {
        addTodo(todoInputValue);
        todoInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});


renderTodos();