// src/components/AddTaskForm.js
import React, { useState } from 'react';
import "./AddTaskForm.css"

const AddTaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To Do');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            alert('Title is required!');
            return;
        }
        addTask({ title, description, status });
        setTitle('');
        setDescription('');
        setStatus('To Do');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Status:
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </label>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTaskForm;
