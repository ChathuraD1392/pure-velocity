import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import MenuContext from "../StateManagement/contexts/menuContext";
import logo from "../assets/images/Logo Horizontal white@300x.png";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ThemeContext from "../StateManagement/contexts/themeContext";

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
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <main>
            <Outlet />
            <ScrollRestoration />
          </main>
        </ThemeContext.Provider>
        <Footer />
      </MenuContext.Provider>
    </>
  );
};

export default Layout;
