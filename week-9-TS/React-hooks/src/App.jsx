import { useEffect, useState } from 'react'
import './App.css'
// create the component that will render for 10 sec and then disappear

function App() {
  const [render, setRender]=useState(true);

  // after 10 sec, setRender to false
  useEffect(()=>{
    setTimeout(()=>{
      setRender(false)
    },5000)
  },[])

  return(
    <>
    {render ?<MyComponent/>:<div></div>}
    </>
  )


}

function MyComponent(){ 
  // life cycle events
  useEffect(()=>{
    console.error('Component mounted');

    return ()=>{
      console.log('Component will unmount');
    }
  },[]);

  return(
    <div>
      <h1>Component rendered</h1> 
    </div>
  )

}


export default App;
  