import React, { useState } from 'react'
import Context from './ContextEx/Context'
import Page1 from './ContextEx/page1'
import Page2 from './ContextEx/page2'
import Page3 from './ContextEx/Page3'


function useContextEx() {
  const [theme, setTheme] = useState("light");
  const [currentPage, setCurrentPage] = useState("A");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h2>useContextEx</h2>
        <div>
          <button onClick={() => setCurrentPage("A")}>Page 1</button>
          <button onClick={() => setCurrentPage("B")}>Page 2</button>
          <button onClick={() => setCurrentPage("C")}>Page 3</button>
        </div>
        <div style={{ marginTop: "20px" }}>
          {currentPage === 'A' && <Page1 />}
          {currentPage === 'B' && <Page2 />}
          {currentPage === 'C' && <Page3 />}
        </div>
      </div>
    </Context.Provider>
  );
}

export default useContextEx