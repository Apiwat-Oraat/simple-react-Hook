import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Menu.css";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * A navigation menu component that displays links to various React hook examples.
 * Each link is a NavLink component that will update the URL in the browser when clicked.

/*******  71de264c-6fa0-4222-a022-ea8b4dfbfef1  *******/
function Menu() {
  return (
    <nav className='menu'>
      <NavLink to="/usestate">useState</NavLink>
      <NavLink to="/useeffect">useEffect</NavLink>
      <NavLink to="/usecontext">useContext</NavLink>
      <NavLink to="/usereducer">useReducer</NavLink>
      <NavLink to="/usememo">useMemo</NavLink>
      <NavLink to="/usecallback">useCallback</NavLink>
    </nav>
  )
}

export default Menu