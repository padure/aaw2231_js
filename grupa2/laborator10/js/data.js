export const tasksList = JSON.parse(localStorage.getItem('tasks')) ?? [];
export const tasks = document.querySelector("#tasks");