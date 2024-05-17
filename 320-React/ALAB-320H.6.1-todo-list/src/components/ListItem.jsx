import { useState } from 'react';

const ListItem = ({ todo, dispatch }) => {
  const [input, setInput] = useState(todo.name);
  const [isActive, setIsActive] = useState(false);

  return (
    <div style={{ display: 'flex', gap: '10px' }} className="item">
      <input
        type="checkbox"
        onChange={() => dispatch({ type: 'TOGGLE', payload: { id: todo.id } })}
      />
      <input
        className={isActive ? 'active' : 'no-active'}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}
      ></input>
      <button
        style={{ display: isActive ? 'block' : 'none' }}
        onClick={() => {
          dispatch({ type: 'EDIT', payload: { id: todo.id, name: input } });
          setIsActive(false);
        }}
      >
        Save
      </button>
      <button
        style={{ display: isActive ? 'none' : 'block' }}
        onClick={() => setIsActive(true)}
      >
        Edit
      </button>
      <button
        style={{ display: isActive ? 'none' : 'block' }}
        onClick={() => dispatch({ type: 'DELETE', payload: { id: todo.id } })}
      >
        Delete
      </button>
    </div>
  );
};

export default ListItem;
