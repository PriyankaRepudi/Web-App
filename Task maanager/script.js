// Select elements
const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

// Main function to add a task
const addTask = () => {
    const text = taskInput.value.trim();

    if (text === "") return; // Prevent empty tasks

    const li = document.createElement('li');

    // ES6 Template Literals for clean HTML injection
    li.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Add delete functionality
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = ""; // Reset input field
};

// Event Listeners
addBtn.addEventListener('click', addTask);

// Allow pressing "Enter" to add tasks
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});