// DOM Elements
const toggleBtn = document.getElementById("toggleForm");
const taskForm = document.getElementById("taskForm");
const addTaskForm = document.getElementById("addTaskForm");
const tasksContainer = document.getElementById("tasksContainer");

// Toggle form visibility
toggleBtn.addEventListener("click", () => {
  taskForm.classList.toggle("show");

  if (taskForm.classList.contains("show")) {
    toggleBtn.textContent = "Hide Form";
  } else {
    toggleBtn.textContent = "Add New Task";
  }
});

// toggle the message and stack
let taskStack = [];
