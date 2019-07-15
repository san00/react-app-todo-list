import React, { useState }from 'react';
import Header from './components/Header';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    className='todo'>
    {todo.text}
    <div>
      <button onClick={() => completeTodo(index)}>Completed</button>
      <button onClick={() => removeTodo(index)}>Delete</button>
    </div>
  </div>;
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className='input' value={value}
        placeholder="Add item to the list..."
        onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function App() {

  const [todos, setTodo] = useState([
    {
      text: 'Use react hooks',
      isCompleted: false
    },
    {
      text: 'Write some code',
      isCompleted: false
    },
    {
      text: 'Build this app',
      isCompleted: false
    }

  ]);

  const addTodo = text => {
    const newTodo = [...todos, { text }];
    setTodo(newTodo);
  }

  const completeTodo = index => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = true;
    setTodo(newTodo);
  }

  const removeTodo = index => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  }

  return (<div className='app'>
    <Header/>
    <div className='todo-list'>
      {todos.map((todo, index) => (
        <Todo key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  </div>)
}


export default App;

