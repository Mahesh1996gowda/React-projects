import React from 'react'
import './global.css'
const CounterUsingFB = () => {
    let[count,setcunter]=React.useState(0)
    let handleIncrement=() => {
        setcunter(count+1)
    }
    let  handleDecrement=() => {
        setcunter(count-1)
    }
    let handleReset=() => {
        setcunter(0)
    }
  return (
    <div className='maindiv'>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+INCREMENT</button>
      <button onClick={handleDecrement}>-DECREMENT</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  )
}

export default CounterUsingFB
