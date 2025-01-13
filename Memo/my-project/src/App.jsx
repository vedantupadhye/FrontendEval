import { useState } from 'react'

function App() {

  const [count,setCount]= useState(0)
  const [input,setInput] =useState('')


  const handleIncrement =() =>{
    console.log("running expensive call")
    setCount(count+1)
  }

  const mul = count*2
  console.log(input)
  
  return (
    <div className='content-center items-center justify-center'>
        <div>
            <p>Counter :{count}</p>
            <button className='bg-red-300 rounded-md p-2' onClick={handleIncrement}>Incremet</button>
            <p>multiply value: {mul}</p>
        </div>
        <div className='my-10'>
          <p>Input section </p>
          <input type='text' className='border' onChange={(e)=>setInput(e.target.value)} />
        </div>
    </div>
  )
}

export default App
