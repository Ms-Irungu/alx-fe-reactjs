import React, {useState} from 'react'

const TodoList = () => {
const [todos, setTodos] = useState([
  {id: 1, text: 'Learn React', done: true},
  {id: 2, text: 'Learn Firebase', done: false},
  {id: 3, text: 'Learn GraphQL', done: false},
  {id: 4, text: 'Learn Node.js', done: false},
  {id: 5, text: 'Learn TypeScript', done: false}
]);

  //method for adding new todo
  const addTodo = (text) => {
    const newTodos = [...todos, { id: todos.length + 1, text, completed: false }];
    setTodos(newTodos);
  };

  //method for toggling todo
  const toggleTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  //method for deleting todo
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
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
        onChange={(e) => setTodos([...todos, { id: todos.length + 1, text: e.target.value, done: false }])}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <button onClick={() => addTodo('New Todo')}>Add</button>
    </div>
  )
}

export default TodoList