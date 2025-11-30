import { AiFillTikTok } from "react-icons/ai";
import { BsFillPinMapFill } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { MdMedicalServices } from "react-icons/md";
import logo from "../assets/images/Logo Horizontal white@300x.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 w-full bg-[#0a0f2d]/70">
      {/* TOP BAR */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-5 bg-[#0a0f2d]/80 px-6 md:px-12 lg:px-10 pb-2 md:pb-5 ">
        <div className="text-sm text-white flex flex-col text-start justify-start md:justify-start">
          <img
            src={logo}
            alt="logo"
            className="h-16 w-full sm:h-14 mt-5 md:h-20 lg:h-24 xl:h-28 object-contain"
          />
          <p className="hidden md:block text-[10px] text-center">
            To bring world-class Tesla servicing to Sri Lanka.
          </p>
          <div className="flex items-center justify-center gap-5 text-3xl text-white my-2 md:mt-5 md:ml-5">
            <FaFacebookSquare className="hover:text-[#007bff] cursor-pointer duration-200" />
            <FaInstagram className="hover:text-[#007bff] cursor-pointer duration-200" />
            <FaLinkedin className="hover:text-[#007bff] cursor-pointer duration-200" />
            <AiFillTikTok className="hover:text-[#007bff] cursor-pointer duration-200 text-[33px]" />
          </div>
        </div>

        {/* Centered About Text (On large move to right) */}
        <div className="text-white col-start-4 text-center md:text-left pt-5">
          <div className="text-white hidden md:block">
            <div className="flex items-center space-x-3">
              <h3 className="font-semibold text-sm md:text-lg">Services</h3>
              <MdMedicalServices className="text-3xl" />
            </div>

            <div className="py-4 space-y-1 text-xs">
              <p>Advanced Diagnostics & Troubleshooting</p>
              <p>High Voltage System Repairs</p>
              <p>Electrical & Mechanical Repairs</p>
              <p>Preventative Maintenance</p>
              <p>Battery & Range Health Evaluation</p>
              <p>Software & Configuration Support</p>
            </div>
          </div>
        </div>
        <div className="text-white text-center md:text-left pt-5 grid grid-cols-1">
          <div className="items-center md:items-start space-x-3 ">
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <h3 className="font-semibold text-sm md:text-lg md:mr-0">
                Find us
              </h3>
              <BsFillPinMapFill className="text-lg md:text-2xl ml-2" />
            </div>
          </div>

          <div className="py-1 pr-2 md:pr-10 mt-2 space-y-2 font-extralight text-[11px]">
            <p>
              <span className="font-semibold">Hotline : </span> +94 XXXXXXXX
            </p>
            <p>
              <span className="font-semibold">Our Office : </span> 11/3/2,
              Marine Drive, Wellawatte, Colombo 06
            </p>
            <p>
              <span className="font-semibold">Service Centre : </span> 75,
              Station Road, Kandana, Sri Lanka
            </p>
            <p className="flex w-fit items-center rounded-md ml-8 md:ml-0 justify-center px-2  py-1 bg-[#007bff] text-[10px] font-medium mt-2 text-white">
              <GoClockFill />
              <span className="pl-2 text-center">
                We respond fast — usually within minutes.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-3 bg-[#0a0f2d]/80 border-t border-slate-200 items-center">
        <div className="text-[10px] md:text-xs text-white text-center mb-1 md:mb-0 md:text-start">
          © {new Date().getFullYear()} Pure Velocity — Powering Sri Lanka’s EV
          future.
        </div>
        <div className="text-[10px] md:text-xs text-white text-center">
          All Rights Reserved
        </div>
        <div className="hidden md:block text-xs text-white pr-6">
          <div className="flex justify-end space-y-1 space-x-3 text-semibold">
            <Link to="/services">
              <p className="hover:underline underline-offset-4 hover:text-[#007bff]">
                Services
              </p>
            </Link>
            <Link to="/about">
              <p className="hover:underline underline-offset-4 hover:text-[#007bff]">
                About
              </p>
            </Link>
            <Link to="/our-team">
              <p className="hover:underline underline-offset-4 hover:text-[#007bff]">
                Our Team
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
