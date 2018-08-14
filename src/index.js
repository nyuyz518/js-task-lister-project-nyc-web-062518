document.addEventListener('DOMContentLoaded', () => {
  //const appRoot = document.getElementById('app-content')
  const newListFieldName = document.getElementById('new-list-title')
  const lists = []
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");

  //const app = new TaskLister();
  let listButton = document.getElementById('listButton');

  listButton.addEventListener("click", displayTaskForm)

  function generateOptionsTags() {
    return lists.map( listName => `<option value="${listName}">${listName}</option>` ).join('')
  }

  function displayTaskForm() {
    lists.unshift(newListFieldName.value)
    //let taskForm = document.createElement('div')

    //taskForm.setAttribute("id", "app-content")

    let newTaskForm = `
    <form id="create-task-form">
      <label for="parent-list">Select List:</label>
      <select id="parent-list">
        ${generateOptionsTags()}
      </select>

      <label for="new-task-description">Task description:</label>
      <input required type="text" id="new-task-description" placeholder="description">

      <label for="new-task-priority">Priority level:</label>
      <input type="text" id="new-task-priority" placeholder="priority">
      <input type="submit" value="Create New Task">
    </form>
  `


    // let formOption = document.createElement('option')
    // formOption.setAttribute('value', 'test')
    //
    // formOption.innerText = 'test'
    //
    // document.getElementById('parent-list').appendChild(formOption)

    listDiv.innerHTML = newTaskForm
    newListFieldName.value = ''

  }
});
