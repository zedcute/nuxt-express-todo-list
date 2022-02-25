const express = require('express')
const app = express()
const accountRoute = require('./routes/accountRoute')
const todosRoute = require('./routes/todosRoute')

app.use(express.json())

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))

app.use('/api/account', accountRoute)
app.use('/api/todos', todosRoute)