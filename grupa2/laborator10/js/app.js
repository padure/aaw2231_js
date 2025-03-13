import {
    adaugaUnTask,
    displayTasks,
    addNewTasksInLS
} from './functions.js';
import { tasksList } from './data.js';
const button = document.querySelector("#adauga");

button.addEventListener('click', () => {
    const task = prompt('Scrie o sarcina');
    if (task != null && task != "") {
        adaugaUnTask(task);
        tasksList.push(task);
        addNewTasksInLS(tasksList);
    }
});

displayTasks(tasksList);