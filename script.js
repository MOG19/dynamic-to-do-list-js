// document.addEventListener('DOMContentLoaded', function() {
//     const addButton = document.getElementById('add-task-btn');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');

//     // Load tasks from Local Storage
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//     // Function to save tasks to Local Storage
//     function saveTasks() {
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     }
//     // Function to render tasks
//     function renderTasks() {
//         taskList.innerHTML = '';
//         tasks.forEach(task => {
//             const listItem = document.createElement('li');
//             listItem.textContent = task; 

//             const removeButton = document.createElement('button');
//             removeButton.textContent = 'Remove';
//             removeButton.className = 'remove-btn';
//             removeButton.onclick = function() {
//                 tasks = tasks.filter(t => t !== task);
//                 saveTasks();
//                 renderTasks();
//             };

//             listItem.appendChild(removeButton);
//             taskList.appendChild(listItem);
//         });
//     }

//     // Function to add a new task
//     function addTask() {
//         ["classList.add"]
//         const taskText = taskInput.value.trim();
//         if (taskText === '') {
//             alert('Please enter a task.');
//             return;
//         }

//         tasks.push(taskText);
//         saveTasks();
//         renderTasks();

//         taskInput.value = '';
//     }

//     // Event listener for Add Task button
//     addButton.addEventListener('click', addTask);

//     // Event listener for Enter key press in input field
//     taskInput.addEventListener('keypress', function(event) {
//         if (event.key === 'Enter') {
//             addTask();
//         }
//     });

//     // Initial render of tasks
//     renderTasks();
// });



document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to save tasks to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to render tasks
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.textContent = task;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';
            removeButton.onclick = function() {
                tasks = tasks.filter(t => t !== task);
                saveTasks();
                renderTasks();
            };

            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
        });
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        tasks.push(taskText);
        saveTasks();
        renderTasks();

        taskInput.value = '';
    }

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key press in input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Initial render of tasks
    renderTasks();
});
