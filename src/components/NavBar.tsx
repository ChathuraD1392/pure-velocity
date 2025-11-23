import { BiMoon, BiSun } from "react-icons/bi";
import logo from "../assets/images/Logo Horizontal R Blue@300x.png";

interface Props {
  theme: string;
  toggleTheme: () => void;
}
const NavBar = ({ theme, toggleTheme }: Props) => {
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Team", href: "/our-team" },
    { label: "Why EVs?", href: "/why-evs" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <>
      <div className="navbar bg-white shadow-md rounded-b-xl w-full dark:bg-black">
        <div className="navbar-start">
          <img src={logo} alt="logo" className="w-30" />
        </div>
        <div className="navbar-center">
          {navItems.map((item, index) => (
            <a
              key={index}
              className="text-md gap-4 p-2 pl-4 pr-4 cursor-pointer text-black hover:bg-zinc-100 rounded"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="navbar-end gap-2 font-black">
          <button className="btn btn-neutral btn-outline">Open Location</button>
          <button
            className="btn btn-neutral btn-outline rounded-lg"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <BiMoon className="text-xl" />
            ) : (
              <BiSun className="text-xl" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
