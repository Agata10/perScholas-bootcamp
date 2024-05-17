import { useReducer, useState } from 'react';

import './App.css';
import ListItem from './components/ListItem';
function reducer(todos, action) {
  switch (action.type) {
    case 'ADD':
      return [newTodo(action.payload.name), ...todos];
    case 'TOGGLE':
      return todos.map((todo) => {
        if (todo.id == action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case 'DELETE':
      return todos.filter((todo) => todo.id !== action.payload.id);
    case 'EDIT':
      return todos.map((todo) => {
        if (todo.id == action.payload.id) {
          return { ...todo, name: action.payload.name };
        }
        return todo;
      });
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}
function App() {
  const [name, setName] = useState('');
  const [todos, dispatch] = useReducer(reducer, []);
  // const [state, dispatch] = useReducer(reducer, '');
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD', payload: { name: name } });
    setName('');
  };
  console.log(todos);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add task"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <div className="items">
        {todos.map((todo) => {
          return <ListItem key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
}

export default App;
