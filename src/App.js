import React, { useState }from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    className='todo'>
    {todo.text}
    <div>
      <button className="button button__complete" onClick={() => completeTodo(index)}>Completed</button>
      <button className="button button__remove" onClick={() => removeTodo(index)}>x</button>
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
    <form onSubmit={handleSubmit} className="todo todoForm">
      <input type="text" className='input' value={value}
        placeholder="Add tasks to list..."
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
    <div className='todoList'>
    <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}  
    </div>
    <Footer/>
  </div>)
}


export default App;

