import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { BiSun } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import MenuContext from "../StateManagement/contexts/menuContext";
import { navHome, navItems } from "../assets/data/navdata";

interface NavBarProps {
  toggleTheme: () => void;
  logo: string;
  theme: "light" | "dark";
}

const NavBar = ({ toggleTheme, logo, theme }: NavBarProps) => {
  const { pathname } = useLocation();
  const { isMenuVisible, setMenuVisible } = useContext(MenuContext);

  return (
    <>
      <motion.header
        className={`fixed top-3 md:top-5 left-1/2 transform -translate-x-1/2 z-50 
    rounded-xl md:rounded-3xl w-[90%] h-[60px] md:h-fit max-w-[1400px] bg-[#0a0f2d]/70`}
        initial={{ opacity: 0, scale: 1, y: "-5vh" }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", delay: 0.5, stiffness: 200 }}
      >
        <div className="flex items-center justify-between h-15 md:h-20 px-4 md:px-6">
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
          <nav className="hidden lg:flex items-center gap-6 text-md text-white font-light">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05, originX: 0, originY: 0 }}
                transition={{ type: "keyframes", stiffness: 100 }}
                className="hover:font-medium p-1"
              >
                <Link
                  to={item.href}
                  className={`${pathname === item.href ? "font-medium" : ""}`}
                >
                  {item.label}
                </Link>
              </motion.button>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              className={`inline-flex items-center  rounded px-2 py-2 text-sm font-medium text-white cursor-pointer ${
                theme === "light" ? "border-white" : "border-amber-300"
              }`}
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
            >
              {theme === "light" ? (
                <BiSun className="text-white text-lg" />
              ) : (
                <RiMoonFill className="text-lg text-amber-300" />
              )}
            </motion.button>

            {/* Mobile Menu */}
            <div className="lg:hidden sm:inline-block">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center border-white rounded px-2 py-2 text-sm font-medium text-white cursor-pointer"
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

      {isMenuVisible && (
        <motion.section>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 200,
              }}
              className={`z-60 grid grid-cols-5 fixed top-20 right-0 w-full h-full text-white opacity-90 ${
                isMenuVisible ? "backdrop-blur-xs" : ""
              }`}
            >
              <div className="h-full flex items-start justify-center pt-15 text-black rounded-xl col-start-4 col-span-2">
                <ul className="space-y-7 pl-4 pb-20">
                  {navHome.map((item, index) => (
                    <li key={index}>
                      <motion.button
                        onClick={() => setMenuVisible(false)}
                        className={`${
                          pathname === item.href
                            ? "bg-[#0a0f2d]/90"
                            : "bg-[#007bff]"
                        } pl-3 p-2 rounded-md text-white w-full`}
                        whileHover={{
                          scale: 1.03,
                          originX: 0,
                        }}
                        whileTap={{
                          scale: 1.03,
                          originX: 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          delay: index * 0.1,
                        }}
                      >
                        <Link to={item.href}>
                          <div className="flex justify-start items-center text-sm space-x-1">
                            <span>{item.element}</span>
                            <span className="text-xs">{item.label}</span>
                          </div>
                        </Link>
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.section>
      )}
    </>
  );
};

export default NavBar;
