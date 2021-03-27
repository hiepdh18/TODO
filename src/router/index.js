const express = require('express');
const router = express.Router();

const {
    createTodo,
    updateTodo, 
    getTodoList,
    clearCompleted, 
    deleteTodo
} = require('../controllers/TodoController');

router.post('/createTodo',createTodo);

router.post('/updateTodo',updateTodo);

router.post('/todos',getTodoList);

router.post('/deleteTodo', deleteTodo);

router.post('/clearCompleted', clearCompleted);


module.exports = router; 

// - Create Todo - Create single todo for eachtime (`/api/createTodo`)
// - Update Todo & mark this  todo as complete (`/api/updateTodo`)
// - Get all todo (`/api/todos`)
// - Get all completed todos (`/api/todos` params:`completed: true`)
// - Get all activated todos (`/api/todos` params:`completed: false`)
// - Delete todo (`/api/deleteTodo`)
// - Delete all completed todos (`/api/clearCompleted`)