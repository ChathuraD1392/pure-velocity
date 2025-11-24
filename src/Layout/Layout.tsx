import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import logo from "../assets/images/Logo Horizontal white@300x.png";
import { useState } from "react";
import MenuContext from "../StateManagement/contexts/menuContext";

const Layout = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    document.body.classList.toggle("dark", newTheme === "dark");
  };
  return (
    <>
      <MenuContext.Provider value={{ isMenuVisible, setMenuVisible }}>
        <NavBar toggleTheme={toggleTheme} logo={logo} theme={theme} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </MenuContext.Provider>
    </>
  );
};

export default Layout;
