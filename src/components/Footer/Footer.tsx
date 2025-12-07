import { AiFillTikTok } from "react-icons/ai";
import { BsFillPinMapFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import {
  MdEmail,
  MdMedicalServices,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import logo from "../../assets/images/Logo Horizontal white@300x.png";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
// imports unchanged

const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 w-full bg-[#0a0f2d]/70">
      {/* TOP BAR */}
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center bg-[#0a0f2d]/80">
        {/* LOGO */}
        <div className="text-sm text-white flex flex-col text-center md:text-start mt-10 md:mt-0 md:ml-5">
          <img
            src={logo}
            alt="logo"
            className="h-20 w-auto sm:h-14  md:h-20 lg:h-30 mx-auto md:mx-0 object-contain"
          />

          <p className="hidden lg:block text-[13px] mt-2">
            To bring world-class Tesla servicing to Sri Lanka.
          </p>
        </div>

        {/* SERVICES — ONLY SHOW FROM lg AND ABOVE */}
        <div className="hidden lg:flex">
          <div className="text-white text-left w-[400px] mb-5 mt-10">
            <div className="flex items-center space-x-3">
              <h3 className="font-light text-xl">Services</h3>
              <MdMedicalServices className="text-3xl" />
            </div>

            <div className="py-4 space-y-2 text-[13px] font-extralight grid">
              <Link to="services/trouble-shooting">
                Advanced Diagnostics & Troubleshooting
              </Link>
              <Link to="services/high-voltage">
                High Voltage System Repairs
              </Link>
              <Link to="services/repairs">Electrical & Mechanical Repairs</Link>
              <Link to="services/maintenance">Preventative Maintenance</Link>
              <Link to="services/evaluation">
                Battery & Range Health Evaluation
              </Link>
              <Link to="services/support">
                Software & Configuration Support
              </Link>
            </div>
          </div>
        </div>

        {/* FIND US */}
        <div className="text-white text-center md:text-left w-full md:w-[350px] mt-6 md:mt-10">
          <div className="flex items-center justify-center md:justify-start space-x-3 mb-5">
            <h3 className="font-light text-xl">Find us</h3>
            <BsFillPinMapFill className="text-2xl" />
          </div>

          <div className="space-y-3 font-extralight text-center md:text-left">
            <p className="flex justify-center md:justify-start items-center text-xs md:text-sm">
              <BsFillTelephoneFill className="mr-3 text-md md:text-xl" /> +94
              XXXXXXXX
            </p>

            <p className="flex justify-center md:justify-start items-center text-sm">
              <MdEmail className="mr-3 text-md md:text-xl" />
              headoffice@purevelocity.lk
            </p>

            <p className="flex justify-center md:justify-start items-center text-sm">
              <FaLocationDot className="mr-3 text-md md:text-xl" /> 75, Station
              Road, Kandana (office)
            </p>

            <p className="flex justify-center md:justify-start items-center text-[11px] md:text-xs">
              <MdOutlineMiscellaneousServices className="mr-3 text-lg md:text-xl" />
              11/3/2, Marine Drive, Wellawatte Colombo 06
            </p>

            <p className="flex justify-center md:justify-start w-fit mx-auto md:mx-0 mb-2 lg:mb-0 items-center rounded-md px-2 py-1 bg-[#007bff] text-[10px] font-medium text-white">
              <GoClockFill />
              <span className="pl-2">
                We respond fast — usually within minutes.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-3 bg-[#0a0f2d]/80 border-t border-slate-200 items-center">
        <div className="hidden md:block"></div>

        <div className="text-[10px] md:text-xs text-white text-center">
          © {new Date().getFullYear()} Pure Velocity
        </div>

        {/* SOCIAL ICONS — visible on all devices */}
        <div className="flex justify-center md:justify-end gap-5 text-white text-2xl mt-2 md:mt-0">
          <FaFacebookSquare className="hover:text-[#007bff] duration-200 cursor-pointer" />
          <FaInstagram className="hover:text-[#007bff] duration-200 cursor-pointer" />
          <FaLinkedin className="hover:text-[#007bff] duration-200 cursor-pointer" />
          <AiFillTikTok className="hover:text-[#007bff] duration-200 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
