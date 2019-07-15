import React, { useState }from 'react';
import Header from './components/Header';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return <div className='todo'>{todo.text}</div>   
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

  return (<div className='app'>
    <Header/>
    <div className='todo-list'>
      {todos.map((todo, index) => (
        <Todo key={index}
          index={index}
          todo={todo}
        />
      ))}
    </div>
  </div>)
}


export default App;

