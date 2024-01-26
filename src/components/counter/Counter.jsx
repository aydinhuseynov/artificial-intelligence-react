import React from 'react'
import { useContext } from 'react'
import { myCounterContext } from '../context/CreateContext'
const Counter = () => {
    const {count,increment,decrement} = useContext(myCounterContext);
  return (
    <div>
        <h1 className="text-center"> {count}</h1>
        <button className='btn btn-success' onClick={increment}>increment</button> <br />
        <button className='mt-2 btn btn-danger' onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter
