import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import './css/App-design.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] =  useState([]);
  const todoInput = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  };

  const addTodo = (e) => {
    const name = todoInput.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4() , name, complete: false}];
    });
    todoInput.current.value = null;
  };

  const clearCompletedTodos = () => {
    const noCompletedTodos = todos.filter(todo => !todo.complete);
    setTodos(noCompletedTodos);
  };

  return (
    <div>
      <div className="todoListClass">
      <TodoList todoProps={todos} toggleTodo={toggleTodo}/>
      </div>
      <input ref={todoInput} type="text" />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearCompletedTodos}>Clear Completed Todos</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </div>
  );
}

export default App;