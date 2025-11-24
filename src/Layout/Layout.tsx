import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import logo from "../assets/images/Logo Horizontal white@300x.png";
import { useState } from "react";

const Layout = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    document.body.classList.toggle("dark", newTheme === "dark");
  };
  return (
    <>
      <NavBar toggleTheme={toggleTheme} logo={logo} theme={theme} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
