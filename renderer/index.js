'use strict'

const {ipcRenderer} = require('electron')

const deleteTodo = (e) => {
    ipcRenderer.send('delete-todo', e.target.textContent)
}

document.getElementById('createTodoBtn').addEventListener('click', () => {
    ipcRenderer.send('add-todo-window')
})

ipcRenderer.on('todos', (event, todos) => {
    const todoList = document.getElementById('todolist')

    const todoItems = todos.reduce((html, todo) => {
        html + `<li class="todo-item">${todo}</li>`

        return html
    }, '')

    todoList.innerHTML = todoItems

    todoList.querySelectorAll('.todoItem').forEach(item => {
        item.addEventListener('click', deleteTodo)
    })
})