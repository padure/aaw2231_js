const adauga = document.getElementById('adauga');
const tasks = document.getElementById('tasks');
//Functions
const deleteTask = (e) => {
    if(confirm('Esti sigur?'))
        e.parentNode.parentNode.remove();
}
const editTask = (e) => {
    const [task, ] = e.parentNode.parentNode.children;
    const newTask = prompt(`Modifica sarcina`, `${task.textContent}`);
    if(newTask != "" && newTask != null){
        task.textContent = newTask;
    } else{
        alert('Introdu valori valide!');
    }
}
//Functionalitate button Adauga
adauga.addEventListener('click', () => {
    const task = prompt('Scrie o sarcina!');
    if(task != "" && task != null){
        tasks.innerHTML += `<li>
        <div>${task}</div>
        <div>
            <button class='delete' onclick='deleteTask(this)'>Delete</button>
            <button class='edit' onclick='editTask(this)'>Edit</button>
        </div>
    </li>`;
    } else{
        alert('Introdu valori valide!');
    }
});