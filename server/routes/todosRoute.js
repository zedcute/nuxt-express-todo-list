const Todo = require('../models/Todo')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const todos = await Todo.find({})
    if (!todos) {
        res.status(404).send({ message: 'Todos not found' });
    }
    else if (todos.length === 0) {
        res.json({ message: 'No todo\'s for today. Create one now!'})
    }
    res.json(todos)
})

router.get('/:todoId', async (req, res) => {
    let { todoId } = req.params
    let todoFound = await Todo.findById(todoId)
    if (!todoFound) {
        res.status(400).send({
            message: `Todo with id ${todoId} not found`
        })
    }
    res.json(todoFound)
})

module.exports = router