import { useContext } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import MenuContext from "../StateManagement/contexts/menuContext";

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
      <header className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between ">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="w-32 sm:w-40 h-auto" />
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-md text-white font-light">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? "underline underline-offset-8 font-light"
                    : ""
                } hover:underline hover:underline-offset-8`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-block px-4 py-2 rounded-md border border-white hover:bg-white/20 text-sm text-white font-extralight"
            >
              Open Location
            </Link>
            <button
              className="inline-flex items-center border border-white/30 rounded hover:bg-white/20 px-2 py-2 text-sm font-medium text-white"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <BiSun className="text-white text-lg" />
              ) : (
                <BiMoon className="text-amber-200 text-lg" />
              )}
            </button>
            <div className="lg:hidden sm:inline-block">
              <button
                className="inline-flex items-center border border-white/30 rounded hover:bg-white/20 px-2 py-2 text-sm font-medium text-white"
                onClick={() => setMenuVisible(!isMenuVisible)}
              >
                <MdMenu className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </header>
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
