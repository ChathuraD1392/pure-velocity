import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { BiMapPin, BiSun } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";
import { IoClose, IoHomeOutline } from "react-icons/io5";
import { MdMenu, MdMiscellaneousServices } from "react-icons/md";
import { RiMoonFill, RiTeamFill } from "react-icons/ri";
import { SiTarget } from "react-icons/si";
import { TbListDetails } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import MenuContext from "../StateManagement/contexts/menuContext";

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
export const navHome = [
  { label: "Home", href: "/", element: <IoHomeOutline /> },
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
  const { pathname } = useLocation();
  const { isMenuVisible, setMenuVisible } = useContext(MenuContext);
  console.log(pathname);

  return (
    <>
      <motion.header
        className={`fixed top-0 z-50 w-full ${
          pathname === "/why-evs" ||
          pathname == "/about" ||
          pathname == "/services"
            ? "bg-[#0a0f2d]"
            : "bg-[#0a0f2d]/40"
        } backdrop-blur-md px-1`}
        initial={{ opacity: 0, scale: 1, y: "-5vh" }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
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
                  className={`${pathname === item.href ? "font-medium" : ""}`}
                >
                  {item.label}
                </Link>
              </motion.button>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            {pathname === "/contact" ? (
              <span className="w-40 h-1"></span>
            ) : (
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
                  <span className="flex item-center space-x-2">
                    <span>Open Location</span>
                    <span className="pt-0.5">
                      <BiMapPin />
                    </span>
                  </span>
                </Link>
              </motion.button>
            )}
            <motion.button
              className={`inline-flex items-center border rounded px-2 py-2 text-sm font-medium text-white cursor-pointer ${
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
            <div className="md:hidden sm:inline-block">
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
      {isMenuVisible && (
        <motion.section>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: "20vw" }}
              animate={{ opacity: 1, x: "0vw" }}
              exit={{ opacity: 0, x: "20vw" }}
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
