// - Create Todo - Create single todo for eachtime (`/api/createTodo`)
// - Update Todo & mark this  todo as complete (`/api/updateTodo`)
// - Get all todo (`/api/todos`)
// - Get all completed todos (`/api/todos` params:`completed: true`)
// - Get all activated todos (`/api/todos` params:`completed: false`)
// - Delete todo (`/api/deleteTodo`)
// - Delete all completed todos (`/api/clearCompleted`)

// id, title, completed

const todoModel = require('../models/Todo');
exports.createTodo = (req, res) => {
    const todo = req.body;
    const inserted = todoModel.insert(todo);
    res.json(inserted);
};
exports.updateTodo = (req, res) => {
    const todo = req.body;
    const updated = todoModel.updateById(todo);
    res.json(updated);
};
exports.getTodoList = (req, res) => {
    const {completed} = req.body;
    const todos = completed === undefined ? todoModel.getAllTodo() :  todoModel.getAllTodo({completed: !! completed});
    res.json(todos);
};
exports.deleteTodo = (req, res) => {
    const  {id} = req.body;
    const result = todoModel.deleteById(id);
    res.json({result});
};
exports.clearCompleted = (_, res) => {
    const completed = todoModel.getAllTodo(true);
    completed.forEach(element => {
        todoModel.deleteById(element.id);   
    });
    res.json({result :  true});
};
