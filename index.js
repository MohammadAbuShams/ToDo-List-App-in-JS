document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
  const taskText = document.getElementById('new-task').value;

  if (taskText.trim() === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  
  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  document.getElementById('task-list').appendChild(li);
  document.getElementById('new-task').value = '';
}
