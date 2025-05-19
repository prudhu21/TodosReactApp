import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import { FaClipboardList } from 'react-icons/fa';
import TodoItem from './components/TodoItems';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="app-container">
      <div className="app">
        <Form addTodo={addTodo} />
        <div className="todo-list">
          {todos.length > 0 ? (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                updateTodo={updateTodo}
              />
            ))
          ) : (
            <div className="empty-state">
              <img src="https://images.pexels.com/photos/8532966/pexels-photo-8532966.jpeg?auto=compress&cs=tinysrgb&w=600" className="tasks-img"/>
              <h3>No tasks yet</h3>
              <p>Add your first task above</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
