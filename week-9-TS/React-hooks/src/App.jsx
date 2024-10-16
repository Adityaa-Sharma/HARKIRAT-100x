import { useState } from 'react'
import './App.css'


function MyComponent(){ 
  const [count, setCount]=useState(0);

  const increment=()=>{
    setCount(count+1);
  }

  return (
    <>
    <p>{count}</p>
    <button onClick={increment}>Increment</button>
    </>
  );
}


export default MyComponent
  