const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    addTodo()
});

function addTodo(todo) {
    let todoText = input.value
    
    if(todo) {
        todoText = todo.text
        
    }
    
    if(todoText) {
        const todoEL = document.createElement('li')
        if(todo && todo.completed) {
            todoEL.classList.add('conpleted')
        }

        todoEL.innerText = todoText

        todosUL.appendChild(todoEL)

        input.value = ''
    }
}