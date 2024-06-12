document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  // Add task event
  addTaskBtn.addEventListener('click', addTask);

  // Add task function
  function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
          const li = document.createElement('li');

          const taskSpan = document.createElement('span');
          taskSpan.textContent = taskText;
          li.appendChild(taskSpan);

          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Delete';
          deleteBtn.className = 'deleteBtn';
          deleteBtn.onclick = deleteTask;
          li.appendChild(deleteBtn);

          taskList.appendChild(li);

          taskInput.value = '';
      }
  }

  // Delete task function
  function deleteTask(event) {
      const taskItem = event.target.parentElement;
      taskList.removeChild(taskItem);
  }

  // Toggle complete task event
  taskList.addEventListener('click', (event) => {
      if (event.target.tagName === 'SPAN') {
          event.target.classList.toggle('completed');
      }
  });
});
