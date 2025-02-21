
import React, { useState }   from 'react'
import TodoForm from './Components/TodoForm/TodoForm'
import TodoList from './Components/TodoList/TodoList'
import "./App.css"
import SearchTodo from './Components/Search/SearchTodo'

function App() {
  
  const [todo,setTodo]=useState([])
  console.log(todo);

  const createTodo=(newTodo)=>{
    setTodo([...todo,newTodo])
  }
  const [searchText, setSearchText] = useState("");

  const deleteTodo=(id)=>{
    setTodo(todo.filter((el)=>el.id!==id)) 
  }

  const updateTodo = (id, newText) => {
    setTodo(todo.map((el) => (el.id === id ? { ...el, text: newText} :el)));
  };

  return (
    <div className='main-container'>
      <TodoForm createTodo={createTodo}/>
      <SearchTodo searchText={searchText} setSearchText={setSearchText}/>
      <TodoList todo={todo} searchText={searchText} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
     
     
    </div>
  )
}

export default App