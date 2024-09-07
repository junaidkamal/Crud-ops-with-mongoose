const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

 const Todo = mongoose.models.Todo || model("Todo", todoSchema);

 module.exports = Todo;