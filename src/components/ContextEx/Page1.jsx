import React, { useContext } from 'react'
import Context from './Context'
import "./theme.css";


function Page1() {
  const { theme, toggleTheme } = useContext(Context);
  return (
    <div className={`page ${theme}`}>
      <h2>Page 1</h2>
      <p>Current theme : {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme {theme}</button>
    </div>
  )
}

export default Page1