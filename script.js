document.getElementById('taskForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const taskName = document.getElementById('taskName').value;
  const taskDetails = document.getElementById('taskDetails').value;
  const taskDate = document.getElementById('taskDate').value;

  const message = `Tarefa '${taskDetails}' para '${taskName}' em ${taskDate} foi adicionada.`;
  
  document.getElementById('message').textContent = message;
});