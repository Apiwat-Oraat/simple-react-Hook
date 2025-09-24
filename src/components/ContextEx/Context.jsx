import { createContext } from "react";
const Context = createContext({
  theme: "light",
  toggleTheme: () => {}
});

export default Context;