// src/components/TaskList.js
import React from 'react';
import "./TaskList.css"

const TaskList = ({ tasks, updateTask, deleteTask }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task._id}>
                    <div>
                        <strong>{task.title}</strong>
                        <p>{task.description}</p>
                        <span>Status: {task.status}</span>
                        <button onClick={() => updateTask(task._id, 'Done')}>Mark as Done</button>
                        <button onClick={() => deleteTask(task._id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
