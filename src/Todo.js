import React from 'react';
import './css/Todo-design.css';

function Todo({ todo, toggleTodo }) {
  
  const toggleTodoFun = () => {
    return toggleTodo(todo.id);
  };

  return (
    <div>
      <label className="todoClass">
      <input type="checkbox" checked={todo.complete} onChange={toggleTodoFun} />
      {todo.name}
      </label>
    </div>
  );
}

export default Todo;