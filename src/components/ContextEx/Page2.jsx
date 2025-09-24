import React, { useContext } from 'react'
import Context from './Context'
import "./theme.css";

function Page2() {
  const {theme, toggleTheme} = useContext(Context);
  return (
    <div className={`page ${theme}`}>
    <h2>Page 2</h2>
    <p>Current theme : {theme}</p>
    <p>use Theme from Page1 setting</p>
    </div>
  )
}

export default Page2