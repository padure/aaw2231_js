const button = document.querySelector("#adauga");
const tasks = document.querySelector("#tasks");

//Functions
const deleteTask = (e) => {
    e.target.parentNode.remove();
}
const editTask = () => {
    alert('Edit');
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

button.addEventListener('click', () => {
    const task = prompt('Scrie o sarcina');
    if (task != null && task != "") {
        adaugaUnTask(task);
    }
});