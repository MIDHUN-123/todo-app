const express=require('express');
const Router=express.Router();
const{
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}=require('../Controller/todoController');

Router.get('/',getTodos);
Router.post('/',createTodo);
Router.patch('/:id', updateTodo);
Router.delete('/:id',deleteTodo);

module.exports=Router;