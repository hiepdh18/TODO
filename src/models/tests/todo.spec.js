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
});