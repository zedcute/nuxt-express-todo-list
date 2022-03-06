const mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    },  
}, { timestamps: true });

module.exports = mongoose.model('Todo', todoSchema);