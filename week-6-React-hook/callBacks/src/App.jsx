import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { memo, useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const inputFunction=useCallback(()=>{
    console.log("input function called");
  },[])

  return (
    <>
    <ButtonComponent onClick={inputFunction}/>
    <button onClick={() => setCount(count + 1)}>Increment</button>

    </>
 
  )
}

const ButtonComponent = memo(({onClick}) => {
  console.log("ButtonComponent rendered");
  
  return (
    <button onClick={onClick}>Click me</button>
  )
})

export default App
