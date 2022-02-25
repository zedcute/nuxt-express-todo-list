const router = require('express').Router()
let todos = [
    {
        id: 1,
        todo: 'Cook breakfast',
        completed: false
    },
    {
        id: 2,
        todo: 'Shower',
        completed: true
    },
]

router.get('/', (req, res) => {
    res.json(todos)
})

router.get('/:todoId', (req, res) => {
    let { todoId } = req.params
    let todoFound = todos.some(todo => todo.id == todoId)
    if (!todoFound) {
        res.status(400).send({
            message: `Todo with id ${todoId} not found`
        })
    }
    let selectedTodo = todos.find(todo => todo.id == todoId)
    res.json(selectedTodo)
})

module.exports = router