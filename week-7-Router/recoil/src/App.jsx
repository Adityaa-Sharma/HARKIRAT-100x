import { useState } from 'react'
import './App.css'
import { useRecoilState, useRecoilValue,RecoilRoot,useSetRecoilState} from 'recoil'
import { countAtom,evenSelector } from './store/atom/count'

function App() {


  return (
    <>
    <RecoilRoot>
      <Count/>
    </RecoilRoot>
    </>

  )

}

function Count() {

  return (
    <>
    <CountRerender/>
    <Buttons />
    </>
  )
}


function Buttons(){

  const setCount=useSetRecoilState(countAtom);
  const count=useRecoilValue(countAtom);
  
  return(
    <>
    <button onClick={()=>{setCount(count=>count+1)}}>Increment</button>
    <button onClick={()=>{setCount(count=>count-1)}}>Decrement</button>
    {/* {count%2===0 && <h4>It is Even</h4>} */}
    
    </>
  )
}

function CountRerender(){

  const count=useRecoilValue(countAtom);
  return(
    <>
    <h1>{count}</h1>
    <EventCountRenderer/>
    </>
  )
}

function EventCountRenderer(){
  const isEven=useRecoilValue(evenSelector);
  return(
    <>
    {isEven && <h4>It is Even</h4>}
    </>
  )

}

export default App
