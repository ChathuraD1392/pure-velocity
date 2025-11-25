import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { IoClose, IoHomeOutline } from "react-icons/io5";
import { MdMenu, MdMiscellaneousServices } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import MenuContext from "../StateManagement/contexts/menuContext";
import { FaMobileAlt } from "react-icons/fa";
import { SiTarget } from "react-icons/si";

interface NavBarProps {
  toggleTheme: () => void;
  logo: string;
  theme: "light" | "dark";
}

export const navItems = [
  {
    label: "Services",
    href: "/services",
    element: <MdMiscellaneousServices />,
  },
  { label: "About", href: "/about", element: <TbListDetails /> },
  { label: "Team", href: "/our-team", element: <RiTeamFill /> },
  { label: "Why EVs ?", href: "/why-evs", element: <SiTarget /> },
  { label: "Contact", href: "/contact", element: <FaMobileAlt /> },
];

const NavBar = ({ toggleTheme, logo, theme }: NavBarProps) => {
  const location = useLocation();
  const { isMenuVisible, setMenuVisible } = useContext(MenuContext);

  return (
    <>
      <motion.header
        className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", delay: 0.5, stiffness: 200 }}
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
          <nav className="hidden md:flex items-center gap-6 text-md text-white font-light">
            {navItems.map((item, index) => (
              <motion.button
                whileHover={{ scale: 1.05, originX: 0, originY: 0 }}
                transition={{ type: "keyframes", stiffness: 100 }}
                className="hover:font-medium p-1"
              >
                <Link
                  key={index}
                  to={item.href}
                  className={`${
                    location.pathname === item.href ? "font-medium" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </motion.button>
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
              className={`inline-flex items-center border rounded px-2 py-2 text-sm font-medium text-white cursor-pointer ${
                theme === "light" ? "border-white" : "border-amber-200"
              }`}
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
            >
              {theme === "light" ? (
                <BiSun className="text-white text-lg" />
              ) : (
                <BiMoon className="text-lg text-amber-200" />
              )}
            </motion.button>
            <div className="lg:hidden sm:inline-block">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center border border-white rounded px-2 py-2 text-sm font-medium text-white cursor-pointer"
                onClick={() => setMenuVisible(!isMenuVisible)}
              >
                {!isMenuVisible ? (
                  <MdMenu className="text-lg" />
                ) : (
                  <IoClose className="text-lg" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>
      <motion.section>
        <AnimatePresence>
          {isMenuVisible && (
            <motion.div
              initial={{ opacity: 0, x: "10vw" }}
              animate={{ opacity: 1, x: "2vw" }}
              exit={{ opacity: 0, x: "10vw" }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className={`z-60 grid grid-cols-2 fixed top-20 right-0 w-full h-full  text-white opacity-90 ${
                isMenuVisible ? "backdrop-blur-xs" : ""
              }`}
            >
              <div className=""></div>
              <div className="bg-white flex items-start pt-15 text-black rounded-xl h-fit">
                <ul className="space-y-7 pl-15 pb-20">
                  <li>
                    <motion.button
                      whileHover={{ scale: 1.2, originX: 0, color: "#007bff" }}
                      onClick={() => setMenuVisible(false)}
                      className="hover:font-medium"
                    >
                      <Link to="/">
                        <div className="flex justify-around items-center space-x-2">
                          <span>
                            <IoHomeOutline />
                          </span>
                          <span>Home</span>
                        </div>
                      </Link>
                    </motion.button>
                  </li>
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <motion.button
                        onClick={() => setMenuVisible(false)}
                        className="text-black hover:font-medium"
                        whileHover={{
                          scale: 1.2,
                          originX: 0,
                          color: "#007bff",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Link to={item.href}>
                          <div className="flex justify-around items-center space-x-2">
                            <span>{item.element}</span>
                            <span>{item.label}</span>
                          </div>
                        </Link>
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </>
  );
};

export default NavBar;
