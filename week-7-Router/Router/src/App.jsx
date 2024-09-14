import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import React from 'react'
const Dashboard = React.lazy(()=>import('./Components/Dashboard'))
const Landing = React.lazy(()=>import('./Components/Landing'))
import './App.css'
import { Suspense } from 'react'

function App() {  
  return(
    <div>   
    <BrowserRouter>
      <AppBar/>
     <Routes>
        <Route path="/" element={<Suspense fallback={"loading..."}> <Landing /></Suspense>} />
        <Route path="/dashboard" element={<Suspense fallback={'loading...'}><Dashboard /></Suspense>} />
     </Routes>

    </BrowserRouter>

    </div>
    
  )
  
}


function AppBar(){
  const navigate = useNavigate();
  return(
    <div>
        <button onClick={
          ()=>{
            navigate("/");
          }
        }>Landing page</button>
        <button onClick={
          ()=>{
            navigate("/dashboard");
          }
        }>Dashboard page</button>

      </div>
  )

}

export default App
