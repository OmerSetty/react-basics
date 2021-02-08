import React from 'react';
import Todo from './Todo';

function TodoList({ todoProps, toggleTodo }) {
  return (
    
    todoProps.map(eachTodo => {
      return <Todo key={eachTodo.id} todo={eachTodo} toggleTodo={toggleTodo}/>    
    })
  );
}
export default TodoList;