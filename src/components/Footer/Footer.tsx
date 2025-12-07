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

const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 w-full bg-[#0a0f2d]/70">
      {/* TOP BAR */}
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center bg-[#0a0f2d]/80 ">
        <div className="text-sm text-white flex flex-col text-start justify-start md:justify-start ml-5">
          <img
            src={logo}
            alt="logo"
            className="h-20 w-full sm:h-14  md:h-20 lg:h-30 object-contain"
          />
          <p className="hidden md:block text-[13px] text-center">
            To bring world-class Tesla servicing to Sri Lanka.
          </p>
        </div>

        {/* Centered About Text (On large move to right) */}
        <div className="flex">
          <div className="text-white text-center md:text-left w-[400px] mb-5">
            <div className="text-white hidden md:hidden lg:block">
              <div className="flex items-center space-x-3 mt-10">
                <h3 className="font-light text-sm md:text-xl">Services</h3>
                <MdMedicalServices className="text-3xl" />
              </div>

              <div className="py-4 space-y-2 text-[13px] font-extralight grid">
                <Link
                  to="services/trouble-shooting"
                  className="hover:underline hover:underline-offset-4"
                >
                  Advanced Diagnostics & Troubleshooting
                </Link>
                <Link
                  to="services/high-voltage"
                  className="hover:underline hover:underline-offset-4"
                >
                  High Voltage System Repairs
                </Link>
                <Link
                  to="services/repairs"
                  className="hover:underline hover:underline-offset-4"
                >
                  Electrical & Mechanical Repairs
                </Link>
                <Link
                  to="services/maintenance"
                  className="hover:underline hover:underline-offset-4"
                >
                  Preventative Maintenance
                </Link>
                <Link
                  to="services/evaluation"
                  className="hover:underline hover:underline-offset-4"
                >
                  Battery & Range Health Evaluation
                </Link>
                <Link
                  to="services/support"
                  className="hover:underline hover:underline-offset-4"
                >
                  Software & Configuration Support
                </Link>
              </div>
            </div>
          </div>
          <div className="text-white text-center md:text-left w-[350px]">
            <div className="items-center md:items-start space-x-3 mt-10 mb-5">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <h3 className="font-light text-sm md:text-xl md:mr-0">
                  Find us
                </h3>
                <BsFillPinMapFill className="text-lg md:text-2xl ml-2" />
              </div>
            </div>

            <div className="py-1 pr-5 md:pr-0 mt-4 space-y-3 font-extralight text-sm">
              <p className="flex items-center text-sm">
                <BsFillTelephoneFill className="mr-3 text-xl" /> +94 XXXXXXXX
              </p>
              <p className="flex items-center text-sm">
                <MdEmail className="mr-3 text-xl" />
                headoffice@purevelocity.lk
              </p>
              <p className="flex items-center text-sm">
                <FaLocationDot className="mr-3 text-xl" /> 75, Station Road,
                Kandana, Sri Lanka (office)
              </p>
              <p className="flex items-center text-sm">
                <MdOutlineMiscellaneousServices className="mr-3 text-xl" />{" "}
                11/3/2, Marine Drive, Wellawatte Colombo 06
              </p>

              <p className="flex w-fit items-center rounded-md ml-8 md:ml-0 justify-center px-2  py-1 bg-[#007bff] text-[8px] md:text-[10px] font-medium text-white">
                <GoClockFill />
                <span className="pl-2 text-center">
                  We respond fast — usually within minutes.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-3 bg-[#0a0f2d]/80 border-t border-slate-200 items-center">
        <div className="text-[10px] md:text-xs text-white text-center mb-1 md:mb-0 md:text-start"></div>
        <div className="text-[10px] md:text-xs text-white text-center">
          © {new Date().getFullYear()} Pure Velocity
        </div>
        <div className="flex justify-end gap-5 text-white text-2xl">
          <FaFacebookSquare className="hover:text-[#007bff] cursor-pointer duration-200" />
          <FaInstagram className="hover:text-[#007bff] cursor-pointer duration-200" />
          <FaLinkedin className="hover:text-[#007bff] cursor-pointer duration-200" />
          <AiFillTikTok className="hover:text-[#007bff] cursor-pointer duration-200" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
