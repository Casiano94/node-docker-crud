const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: String,
  completed: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

// Create
router.post('/', async (req, res) => {
  const todo = new Todo({
    task: req.body.task,
    completed: false
  });
  await todo.save();
  res.json(todo);
});

// Read
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Update
router.put('/:id', async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Todo deleted' });
});

module.exports = router;
