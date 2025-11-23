import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    document.body.classList.toggle("dark", newTheme === "dark");
  };
  return (
    <>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}

export default App;
