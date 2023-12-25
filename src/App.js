// App.js
import React, { useState, useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the server when the component mounts
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    // Fetch tasks from your API endpoint (adjust the URL accordingly)
    fetch('http://localhost:5000/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  };

  const addTask = (newTask) => {
    // Send a POST request to add a new task
    fetch('http://localhost:5000/tasks/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then(() => fetchTasks())
      .catch((error) => console.error('Error adding task:', error));
  };

  const updateTask = (taskId, newStatus) => {
    // Send a POST request to update the task status
    fetch(`http://localhost:5000/tasks/update/${taskId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then(() => fetchTasks())
      .catch((error) => console.error('Error updating task:', error));
  };

  const deleteTask = (taskId) => {
    // Send a DELETE request to delete the task
    fetch(`http://localhost:5000/tasks/delete/${taskId}`, {
      method: 'DELETE',
    })
      .then(() => fetchTasks())
      .catch((error) => console.error('Error deleting task:', error));
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
