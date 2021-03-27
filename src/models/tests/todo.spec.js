const {
    insert,
    deleteById,
    getAllTodo,
    todos,
    updateById
} = require('../Todo');

describe('Test todo model', () => {
    it('should create Todo and insert these todo',() => {
        const inserted = insert({ id: 1, title: 'first todo' });
        expect.assertions(3);
        
        expect(inserted).toEqual({ id: 1, title: 'first todo', completed:false });
        expect(todos.length).toEqual(1);
        expect(todos[0]).toEqual({id:1, title:"first todo", completed: false});
    });
    it('should update todo by id and return this one',() => {
        const updated1 = updateById({id:1, title: "the first todo is modified"});
        const updated2 = updateById({id:2, title: "the first todo is modified"});
        expect.assertions(4);
        
        expect(updated1.title).toEqual('the first todo is modified');
        expect(todos.length).toEqual(1);
        expect(updated1.completed).toEqual(false);
        expect(updated2).toEqual(false);
    });
    it('should delete todo by Id',()=>{
        deleteById(1);
        expect.assertions(2);
        
        expect(todos.length).toEqual(0);
        expect(deleteById(3)).toEqual(false);
    })
    it('should get all todo via completed status', ()=> {
        insert({id: 1, title: 'do homework'});
    
        const allTodo = getAllTodo();
        const notCompletedTodo = getAllTodo(false);
        
        expect.assertions(3);
        expect(allTodo[0]).toEqual({id: 1, title: 'do homework', completed: false});
        expect(notCompletedTodo[0]).toEqual({id: 1, title: 'do homework', completed: false});
        updateById({id:1, title: "do homework", completed: true});
        const completedTodo = getAllTodo(true);
        console.log(completedTodo)
        expect(completedTodo[0]).toEqual({id: 1, title: 'do homework', completed: true});

    })
});