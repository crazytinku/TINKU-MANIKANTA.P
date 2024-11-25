// let tasks = [];
// const taskList = document.getElementById("taskList");
// const scheduledTaskList = document.getElementById("scheduledTaskList");
// const todayDate = document.getElementById("todayDate");

// // Show a specific page
// function showPage(pageId) {
//   const pages = document.querySelectorAll(".page");
//   pages.forEach(page => {
//     if (page.id === pageId) {
//       page.style.display = "block";
//     } else {
//       page.style.display = "none";
//     }
//   });
// }

// // Add task
// function addTask() {
//   const taskInput = document.getElementById("taskInput");
//   const taskCategory = document.querySelector('input[name="taskCategory"]:checked').value;

//   if (taskInput.value.trim() !== "") {
//     const task = {
//       text: taskInput.value,
//       category: taskCategory,
//       time: new Date().toLocaleTimeString(),
//       id: new Date().getTime(),
//       date: new Date().toLocaleDateString() // Save today's date as the task's date
//     };
    
//     tasks.push(task);
//     displayTasks();
//     taskInput.value = "";
//   }
// }

// // Display tasks
// function displayTasks() {
//   // Display tasks for today
//   taskList.innerHTML = "";
//   const todayTasks = tasks.filter(task => task.date === new Date().toLocaleDateString());
//   todayTasks.forEach(task => {
//     const taskElement = document.createElement("div");
//     taskElement.classList.add("task");

//     taskElement.innerHTML = `
//       <div class="info">
//         <span class="dot ${task.category.toLowerCase()}"></span>
//         <p>${task.text}</p>
//       </div>
//       <span class="time">${task.time}</span>
//     `;
//     taskList.appendChild(taskElement);
//   });

//   // Display scheduled tasks
//   scheduledTaskList.innerHTML = "";
//   tasks.forEach(task => {
//     const taskElement = document.createElement("div");
//     taskElement.classList.add("task");

//     taskElement.innerHTML = `
//       <div class="info">
//         <span class="dot ${task.category.toLowerCase()}"></span>
//         <p>${task.text}</p>
//       </div>
//       <span class="time">${task.time}</span>
//     `;
//     scheduledTaskList.appendChild(taskElement);
//   });
// }

// // Toggle switch for settings
// function toggleSwitch(switchElement) {
//   switchElement.classList.toggle("active");
// }

// // Get today's date
// function updateDate() {
//   const date = new Date();
//   todayDate.textContent = date.toLocaleDateString();
// }

// updateDate(); // Initial date

// function addTask() {
//   const taskInput = document.getElementById("taskInput");
//   const taskText = taskInput.value.trim();

//   if (taskText === "") {
//     return; // Don't add empty tasks
//   }

//   // Create a new task element
//   const taskElement = document.createElement("div");
//   taskElement.classList.add("task");

//   // Add task text
//   const taskContent = document.createElement("span");
//   taskContent.classList.add("task-content");
//   taskContent.textContent = taskText;

//   // Create the radio buttons container inside the task
//   const radioButtons = document.createElement("div");
//   radioButtons.classList.add("radio-buttons");

//   // Create Personal radio button
//   const personalRadio = document.createElement("input");
//   personalRadio.type = "radio";
//   personalRadio.name = "taskCategory" + Date.now(); // Unique name for each task's radio group
//   personalRadio.value = "Personal";
//   personalRadio.classList.add("personal");

//   // Create Freelance radio button
//   const freelanceRadio = document.createElement("input");
//   freelanceRadio.type = "radio";
//   freelanceRadio.name = "taskCategory" + Date.now();
//   freelanceRadio.value = "Freelance";
//   freelanceRadio.classList.add("freelance");

//   // Create Work radio button
//   const workRadio = document.createElement("input");
//   workRadio.type = "radio";
//   workRadio.name = "taskCategory" + Date.now();
//   workRadio.value = "Work";
//   workRadio.classList.add("work");

//   // Append radio buttons to the radioButtons div
//   radioButtons.appendChild(personalRadio);
//   radioButtons.appendChild(freelanceRadio);
//   radioButtons.appendChild(workRadio);

//   // Append task content and radio buttons to the task element
//   taskElement.appendChild(taskContent);
//   taskElement.appendChild(radioButtons);

//   // Add the task to the task list
//   const taskList = document.getElementById("taskList");
//   taskList.appendChild(taskElement);

//   // Clear input field
//   taskInput.value = "";
// }


let tasks = [];
const taskList = document.getElementById("taskList");
const scheduledTaskList = document.getElementById("scheduledTaskList");
const todayDate = document.getElementById("todayDate");

// Show a specific page
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => {
    if (page.id === pageId) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  });
}

// Add task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskCategory = document.querySelector('input[name="taskCategory"]:checked').value;

  if (taskInput.value.trim() !== "") {
    const task = {
      text: taskInput.value,
      category: taskCategory,
      time: new Date().toLocaleTimeString(),
      id: new Date().getTime(),
      date: new Date().toLocaleDateString() // Save today's date as the task's date
    };
    
    tasks.push(task);
    displayTasks();
    taskInput.value = "";
  }
}

// Display tasks
function displayTasks() {
  // Display tasks for today
  taskList.innerHTML = "";
  const todayTasks = tasks.filter(task => task.date === new Date().toLocaleDateString());
  todayTasks.forEach(task => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    taskElement.innerHTML = `
      <div class="info">
        <span class="dot ${task.category.toLowerCase()}"></span>
        <p>${task.text}</p>
      </div>
      <span class="time">${task.time}</span>
    `;
    taskList.appendChild(taskElement);
  });

  // Display scheduled tasks
  scheduledTaskList.innerHTML = "";
  tasks.forEach(task => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    taskElement.innerHTML = `
      <div class="info">
        <span class="dot ${task.category.toLowerCase()}"></span>
        <p>${task.text}</p>
      </div>
      <span class="time">${task.time}</span>
    `;
    scheduledTaskList.appendChild(taskElement);
  });
}

// Toggle switch for settings
function toggleSwitch(switchElement) {
  switchElement.classList.toggle("active");
}

// Get today's date
function updateDate() {
  const date = new Date();
  todayDate.textContent = date.toLocaleDateString();
}

updateDate(); // Initial date
