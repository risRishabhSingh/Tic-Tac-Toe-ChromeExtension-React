import React, { useEffect, useState } from 'react'

const Grid = ({ ResetClick, recievename }) => {
  const [win, setWin] = useState(true)
  // const [sign, setSigna] = useState(true) //use in case of human vs human
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null])


  const handleclick = (e) => {

    if (e.target.innerHTML === "") {
      e.target.innerHTML = "X"
      board[Number(e.target.getAttribute('data-index'))] = "X"
      if (win === true) {
        AIMove()
      }
    }
    //human vs human
    // else if(e.target.innerHTML === ""){
    //   e.target.innerHTML = "O"
    //   board[Number(e.target.getAttribute('data-index'))] = "O"
    // }
    winningCombination()
  }

  const AIMove = () => {
    if (board.includes(null)) {
      let key = Math.floor(Math.random() * 9)
      while (board[key] !== null) {
        key = Math.floor(Math.random() * 9);
      }
      board[key] = "O";
      document.querySelectorAll(".Butns").forEach((item) => {
        if (Number(item.getAttribute("data-index")) === key) {
          item.innerHTML = "O"
        }
      })
    }else{
      console.log("fuck u freeze")
    }

  }

  const combination = [
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  //coloums
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  //rows
    [0, 4, 8], [2, 4, 6]              //diagonal
  ]

  const winningCombination = () => {
    combination.forEach((item) => {
      if (board[item[0]] && board[item[0]] === board[item[1]] && board[item[0]] === board[item[2]]) {
        setWin(false)
        recievename(board[item[0]])
      }
    })
    return null
  }

  useEffect(() => {
    document.querySelectorAll(".Butns").forEach((item) => { item.innerHTML = "" })
    setBoard([null, null, null, null, null, null, null, null, null])
    // setSigna(true)
    setWin(true)
    console.log(board);
  }, [ResetClick])


  return (
    <div className='Box'>
      <div className="row1">
        <button data-index="0" className='Butns' onClick={(e) => handleclick(e)}></button>
        <button data-index="1" className='Butns' onClick={(e) => handleclick(e)}></button>
        <button data-index="2" className='Butns' onClick={(e) => handleclick(e)}></button>
      </div>
      <div className="row2">
        <button data-index="3" className='Butns' onClick={(e) => handleclick(e)}></button>
        <button data-index="4" className='Butns' onClick={(e) => handleclick(e)}></button>
        <button data-index="5" className='Butns' onClick={(e) => handleclick(e)}></button>
      </div>
      <div className="row3">
        <button data-index="6" className='Butns' onClick={(e) => handleclick(e)}></button>
        <button data-index="7" className='Butns' onClick={(e) => handleclick(e)}></button>
        <button data-index="8" className='Butns' onClick={(e) => handleclick(e)}></button>
      </div>
    </div>
  )
}

export default Grid
