import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { CreateTodo } from './Components/CreateTodo'  
import {Todos} from './Components/Todos'



function App() {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    const fetchTodos = async ()=>{
      {
        const response = await fetch('http://localhost:3000/todo')
        const json = await response.json()
        setTodos(json);
      }
    }
    fetchTodos()
    
  },[])
  
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos} setTodos={setTodos}></Todos>
    </div>
  )
}

export default App
