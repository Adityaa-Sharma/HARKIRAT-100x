import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div onClick={() => setCount((count) => count + 1)} className="App">
      <button>Count: {count}</button>
    </div>
  )
}

export default App
