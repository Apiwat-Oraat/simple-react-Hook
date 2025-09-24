import React from 'react'
import { useEffect, useState, useRef } from 'react'

function useEffectEx() {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(true);
  const countRef = useRef(0);

  useEffect(()=>{
      const timer = setInterval(() =>{
        if(!run) return;

        setTime(new Date())
        countRef.current += 1
        setCount(countRef.current)

        if(countRef.current >=5 ){
          setRun(false)
          console.log("finish task");
        }else{
          console.log("run task");
        }
      },1000);
      return () => clearInterval(timer);
    },[run])


  return (
    <>
    <h1>useEffect</h1>
    <p>count {count}</p>
    <p>time {time.toLocaleTimeString()}</p>
    </>
  )
}

export default useEffectEx