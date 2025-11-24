import { Link, useLocation } from "react-router-dom";
import { BiMoon, BiSun } from "react-icons/bi";

interface NavBarProps {
  toggleTheme: () => void;
  logo: string;
  theme: "light" | "dark";
}

const NavBar = ({ toggleTheme, logo, theme }: NavBarProps) => {
  const location = useLocation();
  const navItems = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/our-team" },
    { label: "Why EVs", href: "/why-evs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between ">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-32 sm:w-40 h-auto" />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`${
                location.pathname === item.href
                  ? "underline underline-offset-8 font-semibold"
                  : ""
              } "hover:underline hover:underline-offset-8"`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+94XXXXXXXX"
            className="hidden sm:inline-block px-4 py-2 rounded-md border border-white hover:bg-white/20 text-sm text-white"
          >
            Open Location
          </a>
          <button
            className="inline-flex items-center rounded-md backdrop-blur-md border border-white hover:bg-white/20 px-4 py-2.5 text-sm font-medium text-white"
            onClick={toggleTheme}
          >
            {theme === "light" ? <BiMoon /> : <BiSun />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
