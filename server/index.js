const express = require('express')
const connectDB = require('./database/connection')
const app = express()

app.use(express.json())


// PORT
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))

// Database connection
connectDB();

// Routes
const accountRoute = require('./routes/accountRoute')
const todosRoute = require('./routes/todosRoute')
app.use('/api/account', accountRoute)
app.use('/api/todos', todosRoute)