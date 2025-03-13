import { tasksList, tasks } from "./data.js";

const addNewTasksInLS = (list) =>  localStorage.setItem('tasks', JSON.stringify(list));

const deleteTask = (e) => {
    const [taskText, ] = e.target.parentNode.childNodes;
    const newTasksList = tasksList.filter(task => task != taskText.textContent);
    tasks.innerHTML = "";
    addNewTasksInLS(newTasksList);
    displayTasks(newTasksList);
    e.target.parentNode.remove();
}
const editTask = (e) => {
    const [task, ] = e.target.parentNode.childNodes;
    const newTaskText = prompt('Modifica sarcina!', task.textContent);
    const index = tasksList.indexOf(task.textContent);
    tasksList[index] = newTaskText;
    addNewTasksInLS(tasksList);
    if(newTaskText != null && newTaskText != ""){
        e.target.parentNode.childNodes[0].textContent = newTaskText;
    }
}
const displayTasks = (list) => {
    list.forEach( task => {
        adaugaUnTask(task);
    });
}
const adaugaUnTask = (task) => {
    const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', deleteTask);
    const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit');
        editBtn.addEventListener('click', editTask);
    const li = document.createElement('li');
        li.textContent = task;
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
    tasks.appendChild(li);
}

export {
    adaugaUnTask,
    displayTasks,
    editTask,
    deleteTask,
    addNewTasksInLS
}