const button = document.querySelector("#adauga");
const tasks = document.querySelector("#tasks");
const tasksList = JSON.parse(localStorage.getItem('tasks')) ?? [];

//Functions
const deleteTask = (e) => {
    e.target.parentNode.remove();
}
const editTask = (e) => {
    const [task, ] = e.target.parentNode.childNodes;
    const newTaskText = prompt('Modifica sarcina!', task.textContent);
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
// Adauga un Task nou
button.addEventListener('click', () => {
    const task = prompt('Scrie o sarcina');
    if (task != null && task != "") {
        adaugaUnTask(task);
        tasksList.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasksList));
    }
});
// Main
displayTasks(tasksList);