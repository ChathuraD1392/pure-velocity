import { FaMobileAlt } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { SiTarget } from "react-icons/si";
import { TbListDetails } from "react-icons/tb";

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
