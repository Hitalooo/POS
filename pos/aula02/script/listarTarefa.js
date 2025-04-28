document.getElementById("openModal").onclick = function() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function addTask(event) {
    event.preventDefault();
    row.innerHTML = `<td>${taskName}</td><td>${taskDescription}</td><td><button onclick="deleteTask(this)">Excluir</button></td>`;
    taskList.appendChild(row);
    closeModal();
    document.getElementById("taskForm").reset();
}

function deleteTask(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}  const taskName = document.getElementById("taskName").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const taskList = document.getElementById("taskList");
    const row = document.createElement("tr");