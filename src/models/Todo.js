const todos = [];


/**
 * Insert todo to the list
 * @todo {id, title, completed}
 */
exports.insert = todo => {
    const tobeTodo = {...todo, completed : false };
    todos.push(tobeTodo);
    return tobeTodo;
};


/**
 * Update todo by Id
 * @param {todo: Todo}
 * @return {todo | false }
 */
exports.updateById = todo => {
    const foundTodo = todos.find(t => t.id === todo.id); // return todo or undifined
    if(foundTodo) {
        foundTodo = {...todo};
        return foundTodo;
    } else {
        return false;
    }
};


/**
 * Delete todo by Id
 * @param {id: number} 
 * @return {boolean}
 */
exports.deleteById = id => {
    const todoIndex = todos.findIndex(t => t.id === id); // return todo's index or -1
    if(todoIndex === -1) {
        return false;
    } else {
        todos.splice(todoIndex, 1);
        return true;
    }
};


/**
 * 
 * @params {completed} 
 * @return { list }
 */
exports.getAllTodo = params => { // ?
    if(!params) {
        return todos;
    } else {
        const { completed } = params;
        return todos.filter(p => p.completed);
    }
}


exports.todos = todos;