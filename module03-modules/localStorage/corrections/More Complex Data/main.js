const form = document.getElementById('taskForm');
const ul = document.getElementById('taskList');
const reload = document.getElementById("reload")

// create the new list item with a delete button
const createListItem = (task) => {
    const li = document.createElement("li");
    li.setAttribute("id", task.id)
    li.textContent = task.content
    li.classList.add('flex', 'items-center', 'justify-between', 'w-full', 'my-2');

    // delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"
    deleteButton.classList.add("px-4", "py-2", "bg-red-500", "hover:bg-red-400", "text-white", "rounded")

    // delete event
    deleteButton.addEventListener("click", () => {
        const itemToDelete = document.getElementById(`${task.id}`);
        const taskList = JSON.parse(localStorage.getItem("taskList")) || []
        const newTaskList = taskList.filter((item) => task.id !== item.id)
        localStorage.setItem('taskList', JSON.stringify(newTaskList));
        itemToDelete.remove()
    })

    li.appendChild(deleteButton);
    return li;
}


// storing data and displaying it in the dom
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = document.getElementById('userInput').value.trim();
    if(!userInput) return alert("Please enter something in the input")
    
    const newTask = {
      id: crypto.randomUUID().replaceAll("-", ""),
      content: userInput
    };

    const li = createListItem(newTask)
    ul.insertBefore(li, ul.firstElementChild)
    const taskList = JSON.parse(localStorage.getItem('taskList')) || []; 
    taskList.unshift(newTask)
    localStorage.setItem('taskList', JSON.stringify(taskList));

    // Reseting the form
    e.target.reset()
})

// Reload event
reload.addEventListener("click", ()=>{
    window.location.reload()
})

window.addEventListener("load", () => {
    const taskList = JSON.parse(localStorage.getItem('taskList')) || []; 
    taskList.forEach((t) => {
        const li = createListItem(t)
        ul.appendChild(li)
    })
})
