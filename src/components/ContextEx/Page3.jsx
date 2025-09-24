import React, { useContext } from 'react'
import Context from './Context'
import "./theme.css";
import { useEffect, useState, useRef } from 'react'

function Page3() {
  const { theme, toggleTheme } = useContext(Context);
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(true);
  const countRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!run) return;

      setTime(new Date())
      countRef.current += 1
      setCount(countRef.current)

      if (countRef.current >= 5) {
        setRun(false)
        console.log("finish task");
      } else {
        console.log("run task");
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [run])

  return (
    <div className={`page ${theme}`}>
      <h2>Page 3</h2>
      <p>Current theme : {theme}</p>
      <p>count {count}</p>
      <p>time {time.toLocaleTimeString()}</p>
      <p>use Theme from Page1 setting</p>
    </div>
  )
}

export default Page3