const express = require('express');
const connectToDB = require('./database/db');
const Todo = require('./models/todo.model');
const port = process.env.port || 4000
const app = express();

app.use(express.json());


// app.get('/get', (req, res) => {
//     res.send(
//         {
//             success:true,
//             message:'API is running successfully'
//         }
//     );
// })

connectToDB();


app.get('/todos', async (req, res) => {
    try {
        const result = await Todo.find()
        res.send({
            success: true,
            message: 'Todos fetched successfully',
            data: result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Todos not fetched successfully',
            data: result,
        })
    }
})

app.post('/todos/create', async (req, res) => {
    const todoDetails = req.body
     try {
        const result = await Todo.create(todoDetails);
        res.send({
            success: true,
            message: 'Todo created successfully',
            data: result,
        })
     } catch (error) {
        res.send({
            success: false,
            message: 'failed to create',
            data: result,
        })
     }
})

app.get('/:todoId', async (req, res) => {
    const todoId = req.params.todoId;
    try {
        const result = await Todo.findById(todoId);
      res.send({
            success: true,
            message: 'Todo is retrieved successfully',
            data: result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Failed to retrieve',
            data: result,
        })
    }
})

app.patch('/:todoId', async (req, res) => {
    const todoId = req.params.todoId;
    const updatedTodo = req.body;
    try {
        const result = await Todo.findByIdAndUpdate(todoId, updatedTodo, {new: true,

        });
        res.send({
            success: true,
            message: 'Todo is updated successfully',
            data: result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Failed to update',
            data: result,
        })
    }
})

app.delete('/delete/:todoId', async (req, res) => {
try {
    const result = await Todo.findByIdAndDelete(req.params.todoId)
    res.send({
        success: true,
        message: 'Todo is deleted successfully',
        data: result,
    })
} catch (error) {
    res.send({
        success: false,
        message: 'Error deleting Todo',
        data: result,
    })
}
})

app.listen(port, () => {
    console.log('Server is running on port 4000');
})