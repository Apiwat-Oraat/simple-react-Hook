import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './components/Menu'
import { Suspense } from 'react'
import NotFound from './components/NotFound'
import { generateRoutes } from './components/Hook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Menu />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {generateRoutes()}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
