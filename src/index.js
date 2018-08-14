document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");

  //const app = new TaskLister();
});

let listButton = document.getElementById('listButton');

listButton.addEventListener("click", displayTaskForm)

function displayTaskForm() {
  let taskForm = document.createElement('div')
  taskForm.setAttribute("id", "app-content")

  taskForm.innerHTML = `
  <form id="create-task-form">
    <label for="parent-list">Select List:</label>
    <select id="parent-list">
    <option value="My Dank List" selected>
      My Dank List
    </option>
    </select>

    <label for="new-task-description">Task description:</label>
    <input required type="text" id="new-task-description" placeholder="description">

    <label for="new-task-priority">Priority level:</label>
    <input type="text" id="new-task-priority" placeholder="priority">
    <input type="submit" value="Create New Task">
  </form>
`
  document.getElementById('app-content').appendChild(taskForm)

  // document.getElementById('app-content').innerHTML =

}
