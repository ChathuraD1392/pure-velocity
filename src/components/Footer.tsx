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
      <div className="w-full mx-auto flex justify-between items-center bg-[#0a0f2d]/80 px-6 md:px-12 lg:px-10 pb-2 md:pb-5 pt-10">
        <div className="text-sm text-white flex flex-col text-start justify-start md:justify-start">
          <img
            src={logo}
            alt="logo"
            className="h-20 w-full sm:h-14  md:h-20 lg:h-24 xl:h-28 object-contain"
          />
          <p className="hidden md:block text-[13px] text-center">
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
        <div className="flex">
          <div className="text-white text-center md:text-left pt-5 pr-10">
            <div className="text-white hidden md:block">
              <div className="flex items-center space-x-3">
                <h3 className="font-semibold text-sm md:text-xl">Services</h3>
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
          <div className="text-white text-center md:text-left pt-5">
            <div className="items-center md:items-start space-x-3 ">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <h3 className="font-semibold text-sm md:text-xl md:mr-0">
                  Find us
                </h3>
                <BsFillPinMapFill className="text-lg md:text-2xl ml-2" />
              </div>
            </div>

            <div className="py-1 pr-2 md:pr-5 mt-2 space-y-3 font-extralight text-sm">
              <p>
                <span className="font-semibold">Hotline : </span> +94 XXXXXXXX
              </p>

              <p>
                <span className="font-semibold">Email : </span>{" "}
                headoffice@purevelocity.lk
              </p>
              <p>
                <span className="font-semibold">Our Office : </span> 11/3/2,
                Marine Drive, Wellawatte, Colombo 06
              </p>
              <p>
                <span className="font-semibold">Service Centre : </span> 75,
                Station Road, Kandana, Sri Lanka
              </p>
              <p className="flex w-fit items-center rounded-md ml-8 md:ml-0 justify-center px-2  py-1 bg-[#007bff] text-[10px] font-medium mt-7 text-white">
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
              <p className="hover:underline underline-offset-4">Services</p>
            </Link>
            <Link to="/about">
              <p className="hover:underline underline-offset-4">About</p>
            </Link>
            <Link to="/our-team">
              <p className="hover:underline underline-offset-4">Our Team</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
