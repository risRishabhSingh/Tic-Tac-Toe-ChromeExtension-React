import React, { useEffect, useState } from 'react'
import './App.css'
import Grid from './Grid'

const App = () => {
  let [Count , setCount] = useState(0)
  let [Name, setName] = useState(null)
  const [sigl, setsigl] = useState(false)
  const [number, setNumber] = useState(null)

  const gotname = (data) => {
    console.log(`winner is in app.js: ${data}`)
    setNumber((preValues) => preValues+1)
    setName(data)
  }

  const handleReset = () => {
    setCount((prevalue) => prevalue+1)
  }

  useEffect(() => {
    if(Name){
      setsigl(true)
    }
    console.log("Name of winner appeared")
  },[Name,number])
  
  const handlenewgame = () => {
    setsigl(false)
    handleReset()
  }
 

  return (
    <div className='Container'>
      <div className={sigl ? "Hidden" : "Main_Cont"}>
        <h1>Tic-Tac-Toe</h1>
      </div>
      <div className={sigl ? "Hidden" : "Grids"}>
        <Grid ResetClick = {Count} recievename = {gotname}/>
      </div>
      <div className={sigl ? "Hidden" : "Buttons"}>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className={sigl ? "WinContainer" : "Hidden"}>
        <h1>Winner</h1>
        <h2 className='Player'>{Name}</h2>
        <button onClick={handlenewgame}>New Game</button>
      </div>
    </div>
  )
}

export default App
