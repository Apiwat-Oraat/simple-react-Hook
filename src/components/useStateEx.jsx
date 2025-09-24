import React from 'react'
import { useState } from 'react'

function useStateEx() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>useStateEx</h1>
      <p>count {count}</p>
      <button onClick={()=>setCount(count+1)} className='b1'>เพิ่ม 1</button>
      <button onClick={()=>setCount(count+5)} className='b2'>เพิ่ม 5</button>
      <button onClick={()=>setCount(count-5)} className='b3'>ลด 5</button>
      <button onClick={()=>setCount(count-1)} className='b4'>ลด 1</button>
    </>

  )
}

export default useStateEx