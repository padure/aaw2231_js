const adauga = document.getElementById('adauga');
const tasks = document.getElementById('tasks');
//Functions
const deleteTask = () => {
    console.log('Delete');
}
const editTask = () => {
    console.log('Edit');
}
//Functionalitate button Adauga
adauga.addEventListener('click', () => {
    const task = prompt('Scrie o sarcina!');
    tasks.innerHTML += `<li>
        <div>${task}</div>
        <div>
            <button class='delete' onclick='deleteTask()'>Delete</button>
            <button class='edit' onclick='editTask()'>Edit</button>
        </div>
    </li>`;
});