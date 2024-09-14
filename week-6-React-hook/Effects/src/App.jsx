import { useState } from 'react'

import './App.css'
import axios from 'axios'
import { useEffect } from 'react'


function App() {
  const [selectedId, setSelectedId] = useState("66d98759ad329fcf57d885e7")


  return (
    <div>
      <button onClick={function(){
        setSelectedId("66d898151ff294e709de4721")
      }}>1</button>

      <button onClick={function(){
        setSelectedId("66d98759ad329fcf57d885e7")
      }}>2</button>

      <button onClick={function(){
        setSelectedId("66da152f909c89e6c367c1c6")
      }}>3</button>

      <button onClick={function(){
        setSelectedId("66daead0d4caa3b59ba6e50c")
      }}>4</button>

      <Todo id={selectedId}/>

    </div>
    
  )
}

export default App


function Todo({id}){
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    
     const fetch = async ()=>{
      const response= await axios.get('http://localhost:3000/todo')
      const json = await response.data;
      setTodos(json);
    }
    fetch()
  },[id])
  console.log(todos)
  console.log(id)
  const filteredTodos=todos.filter(todo=>todo._id===id);
  console.log("filtered todo :",filteredTodos)

  return (
    <div>
      ID:{id}
      <h3>{filteredTodos[0].title}</h3>
      <p>{filteredTodos[0].description}</p>
      <button onClick={function(){
        axios.put('http://localhost:3000/completed',{
          id:id
        })
        .then(function(response){
          console.log(response.data)
        })
      }  
      }>Mark as Complete</button>
      
    </div>
  )

}