import React, { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: true },
    { id: 2, text: 'Learn Firebase', done: false },
    { id: 3, text: 'Learn GraphQL', done: false },
    { id: 4, text: 'Learn Node.js', done: false },
    { id: 5, text: 'Learn TypeScript', done: false }
  ]);

  // Track input field value
  const [inputValue, setInputValue] = useState(''); // Track input field value

  //method for adding new todo
  const addTodo = () => {
    if(inputValue.trim() === '') return; //prevents adding empty todos
    setTodos([...todos, { id: todos.length + 1, text: inputValue, done: false }]);
    setInputValue(''); //clears input field after adding todo
  };

  //method for toggling todo
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo 
    ));
  };

  //method for deleting todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.done ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new todo"
        value = {inputValue} // Display input field value, Controlled component
        onChange={(e) => setInputValue(e.target.value)} // Update state only
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(); //add todo when Enter key is pressed
          }
        }}
      />
      <button onClick={() => addTodo('New Todo')}>Add</button>
    </div>
  )
}

export default TodoList