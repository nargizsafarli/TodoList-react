
import React, { useState, useEffect } from 'react';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoList from './Components/TodoList/TodoList';
import "./App.css";
import SearchTodo from './Components/Search/SearchTodo';

function App() {
  const [todo, setTodo] = useState([]);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
   
      const savedTodos = JSON.parse(localStorage.getItem("todos"));
       setTodo(savedTodos)
  }, []);

  const createTodo = (newTodo) => {
    const updatedTodos = [...todo, newTodo];
    setTodo(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
  };

  const deleteTodo = (id) => {
    const updatedTodos = todo.filter((el) => el.id !== id);
    setTodo(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
  };

  const updateTodo = (id, newText) => {
    const updatedTodos = todo.map((el) =>
      el.id === id ? { ...el, text: newText } : el
    );
    setTodo(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); 
  };

  return (
    <div className='main-container'>
      <TodoForm createTodo={createTodo} />
      <SearchTodo searchText={searchText} setSearchText={setSearchText} />
      <TodoList todo={todo} searchText={searchText} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
