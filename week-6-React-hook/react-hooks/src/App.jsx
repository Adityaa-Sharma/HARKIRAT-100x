import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'


// other solutions to stop re rendering of other components is that we can use the React.memo() function to stop the re rendering of the other components
function App() {
// React.memo() to stop re rendering of the other components.

  // const [title,setTitle]=useState("React hook 1")
  
  // return (
  //     <>
  //       <button onClick={()=>setTitle("My name is " + Math.random())}>Click me to change the title</button>
  //       <Header title={title}></Header>
  //       <Header title="Reack hook 3"></Header>
  //       <Header title="Reack hook 4"></Header>
  //       <Header title="Reack hook 5"></Header>

  //     </>
  // )

  // function ChangeHeader(){
  //   const [firstTitle, setFirstTitle] = useState("React hook 1")
  //   function changeFirstTitle(){
  //     setFirstTitle("My name is " + Math.random())
  //   }

  //   return (
  //     <>
  //       <button onClick={changeFirstTitle}>Click me to change the title</button>
  //       <Header title={firstTitle} />
  //     </>
  //   )
  // }

// todo which render three todos and a button to add a new todo

  // const [todos, setTodos]=useState([
  //   {id:1, 
  //   title:"Learn React",
  //   description:"Learn react from the react documentation"},
  //   {id:2, 
  //     title:"Play Badminton",
  //     description:"Play badminton with friends"},
  //   {id:3, 
  //     title:"go to classes",
  //     description:"will go to classes to learn new things"},
  // ])
  
  // function AddTodo(){
  //   setTodos([...todos,{id:todos.length+1, title:"New Todo", description:"New Description"}])
  // }

  // return (
  //   <div>
  //     <button onClick={AddTodo}>Add Todo</button>
  //     {todos.map(todo=>{return <Todos key={todo.id} title={todo.title} description={todo.description}/>})}

  //   </div>
  // )

  // function Todos(props){
  //   return (
  //     <div>
  //       <h2>{props.title}</h2>
  //       <p>{props.description}</p>
  //     </div>
  //   )
  // }


// Wrapper component, it basically wraps the other components and pass the props to the other components.
return (
  <div>
    <CardWrapper> Hii There</CardWrapper>
    <CardWrapper>
      <CardWrapper>
        <TextComponent/>
      </CardWrapper>
    </CardWrapper>
    <CardWrapper>How things are going ?</CardWrapper>
  </div>
)


}


export default App

// component

function TextComponent(){
  return(
    <div>
      <h3>
        Hii There!
      </h3>
    </div>
  ) 
}


function CardWrapper({children}){
  return (
    <div style={{border:"2px solid black",padding:20}}>
      {children}
    </div>
  )
}












// const Header=React.memo(function Header({title}) {
//   console.log("Header component is rendering")
//   return (
//     <div >
//       <h1>{title}</h1>
//     </div>
//   )
// })
