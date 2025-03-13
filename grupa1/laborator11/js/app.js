const adauga = document.getElementById('adauga');
const tasks = document.getElementById('tasks');
const tasksData =  JSON.parse(localStorage.getItem('tasks')) ?? [];
//Functions
const deleteTask = (e) => {
    if(confirm('Esti sigur?')){
        const [taskText, ] = e.parentNode.parentNode.children;
        e.parentNode.parentNode.remove();
        const newTasksList = tasksData.filter( task => task != taskText);
        
        localStorage.setItem('tasks', JSON.stringify(newTasksList));
        displayTasks(newTasksList);
    }
}
const displayTasks = (tasksList) => {
    tasksList.forEach(task => {
        tasks.innerHTML += `<li>
            <div>${task}</div>
            <div>
                <button class='delete' onclick='deleteTask(this)'>Delete</button>
                <button class='edit' onclick='editTask(this)'>Edit</button>
            </div>
        </li>`;
    });
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
    tasksData.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasksData));
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
//Main
tasksData.forEach(task => {
    tasks.innerHTML += `<li>
        <div>${task}</div>
        <div>
            <button class='delete' onclick='deleteTask(this)'>Delete</button>
            <button class='edit' onclick='editTask(this)'>Edit</button>
        </div>
    </li>`;
});