document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get the input value
        const taskDescription = document.getElementById("new-task-description").value;

        // Create new task element
        const taskItem = document.createElement("li");
        taskItem.textContent = taskDescription;

        // Add task to list
        taskList.appendChild(taskItem);

        // Clear the input field
        document.getElementById("new-task-description").value = "";
    });
});