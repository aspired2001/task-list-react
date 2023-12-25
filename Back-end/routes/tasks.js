// routes/tasks.js
const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Get all tasks
router.route('/').get((req, res) => {
    Task.find()
        .then((tasks) => {
            res.json(tasks);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
});

// Add new task
router.route('/add').post((req, res) => {
    const { title, status } = req.body;

    if (!title || !status) {
        return res.status(400).json({ error: 'Title and status are required fields.' });
    }

    const newTask = new Task({ title, status });

    newTask
        .save()
        .then(() => {
            res.status(200).json({ 'task': 'Added successfully' });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send('Failed to create a new task');
        });
});
// Update task status
router.route('/update/:id').post((req, res) => {
    Task.findByIdAndUpdate(req.params.id, { status: req.body.status })
        .then(() => {
            res.json('Task updated');
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send('Update failed');
        });
});

// Delete task
router.route('/delete/:id').delete((req, res) => {
    Task.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json('Task removed');
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
