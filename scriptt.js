function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let taskList = document.getElementById("taskList");

    let listItem = document.createElement("li");

    let taskSpan = document.createElement("span");
    taskSpan.classList.add("task-text");
    taskSpan.innerText = taskText;

    let actionsDiv = document.createElement("div");
    actionsDiv.classList.add("actions");

    // Done Button (Toggle Completed State)
    let doneBtn = document.createElement("button");
    doneBtn.classList.add("done-btn");
    doneBtn.innerText = "✔ Done";
    doneBtn.addEventListener("click", () => {
        if (taskSpan.classList.contains("completed")) {
            taskSpan.classList.remove("completed");
            doneBtn.innerText = "✔ Done";
        } else {
            taskSpan.classList.add("completed");
            doneBtn.innerText = "✖ Not Done";
        }
    });

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "🗑 Delete";
    deleteBtn.addEventListener("click", () => {
        listItem.remove();
    });

    actionsDiv.appendChild(doneBtn);
    actionsDiv.appendChild(deleteBtn);

    listItem.appendChild(taskSpan);
    listItem.appendChild(actionsDiv);

    taskList.appendChild(listItem);

    taskInput.value = "";
}
