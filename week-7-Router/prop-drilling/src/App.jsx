import { useState,useContext } from 'react'
import './App.css'
import { CountContext } from './Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    //'we  have to wrap the coomponent that is sending the data with the context provider'
    <>
      <CountContext.Provider value={{count,setCount}}>
        <Count />
      </CountContext.Provider>
    </>
  )
}


function Count() {
  const {count,setCount}=useContext(CountContext);
  return (
    <>
    <CountDisplay count={count} />
    <Buttons />
    </>
  )

}

function CountDisplay({count}) {

  return(
    <div>
      <h1>{count}</h1>
    </div>
  )
}

function Buttons() {
  const {count,setCount}=useContext(CountContext);

  return(
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}

export default App
