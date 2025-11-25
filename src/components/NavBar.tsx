import { useContext } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import MenuContext from "../StateManagement/contexts/menuContext";
import { motion } from "framer-motion";

interface NavBarProps {
  toggleTheme: () => void;
  logo: string;
  theme: "light" | "dark";
}

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/our-team" },
  { label: "Why EVs ?", href: "/why-evs" },
  { label: "Contact", href: "/contact" },
];

const NavBar = ({ toggleTheme, logo, theme }: NavBarProps) => {
  const location = useLocation();
  const { isMenuVisible, setMenuVisible } = useContext(MenuContext);

  return (
    <>
      <motion.header
        className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-md"
        initial={{ opacity: 0, y: -250 }}
        animate={{ opacity: 1, y: -10 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between ">
          {/* Logo */}
          <Link to="/">
            <motion.img
              whileHover={{ scale: 1.02 }}
              src={logo}
              alt="Logo"
              className="w-36 sm:w-40 h-auto"
            />
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-md text-white font-light">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`${
                  location.pathname === item.href ? "font-medium" : ""
                } hover:underline hover:underline-offset-4`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 4px rgb(255,255,255)",
              }}
            >
              <Link
                to="/contact"
                className="hidden sm:inline-block px-4 py-2 rounded-md border border-white text-sm text-white font-extralight"
              >
                Open Location
              </Link>
            </motion.button>
            <motion.button
              className="inline-flex items-center border border-white/30 rounded px-2 py-2 text-sm font-medium text-white"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
            >
              {theme === "light" ? (
                <BiSun className="text-white text-lg" />
              ) : (
                <BiMoon className="text-amber-200 text-lg" />
              )}
            </motion.button>
            <div className="lg:hidden sm:inline-block">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center border border-white/30 rounded px-2 py-2 text-sm font-medium text-white"
                onClick={() => setMenuVisible(!isMenuVisible)}
              >
                <MdMenu className="text-lg" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>
      <section>
        {isMenuVisible && (
          <div className="z-60 grid grid-cols-2 fixed top-20 right-0 w-full h-full bg-black/70 text-white opacity-90">
            <div className="bg-black/40"></div>
            <div className="bg-white/30 flex items-start justify-center pt-15">
              <ul className="space-y-7 text-center">
                <li>
                  <button onClick={() => setMenuVisible(false)}>
                    <Link to="/">Home</Link>
                  </button>
                </li>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <button onClick={() => setMenuVisible(false)}>
                      <Link to={item.href}>{item.label}</Link>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default NavBar;
